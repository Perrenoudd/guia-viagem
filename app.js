(function () {
  "use strict";

  var CATS = [
    { k: "pontos", nome: "Pontos turísticos", ic: "🏛️" },
    { k: "comidas", nome: "Comidas", ic: "🍽️" },
    { k: "paisagens", nome: "Paisagens", ic: "🏞️" },
    { k: "experiencias", nome: "Experiências", ic: "🎟️" },
    { k: "lojas", nome: "Lojas e mercados", ic: "🛍️" },
    { k: "hospedagem", nome: "Onde ficar", ic: "🛏️" },
    { k: "rotas", nome: "Rotas e trilhas", ic: "🥾" },
    { k: "transportes", nome: "Como se locomover", ic: "🚆" }
  ];
  var TIPOS = { hotel: "Hotel", hostel: "Hostel", pousada: "Pousada", camping: "Camping", aluguel: "Aluguel" };
  var FAIXAS = { 1: "$ · Econômico", 2: "$$ · Intermediário", 3: "$$$ · Luxo" };

  /* ---------- armazenamento local (tolerante a falhas) ---------- */
  function ler(chave, padrao) {
    try { var v = localStorage.getItem(chave); return v ? JSON.parse(v) : padrao; } catch (e) { return padrao; }
  }
  function gravar(chave, valor) {
    try { localStorage.setItem(chave, JSON.stringify(valor)); } catch (e) { /* ignora */ }
  }
  var visitados = ler("gv_visitados", {});
  var roteiro = ler("gv_roteiro", []);

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function slug(s) {
    return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function norm(s) { return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  function porNome(a, b) { return (a.nome || a.de).localeCompare(b.nome || b.de, "pt-BR"); }
  function $(id) { return document.getElementById(id); }

  /* ---------- fotos (Wikipédia), com cache e fila ---------- */
  // v2: descarta caches antigos ("gv_fotos") que guardavam "" para respostas 404/429
  var CHAVE_FOTOS = "gv_fotos_v2";
  try { localStorage.removeItem("gv_fotos"); } catch (e) { /* ignora */ }
  var cacheFotos = ler(CHAVE_FOTOS, {});
  var fila = [], ativos = 0, pendentes = {};
  function tituloDe(nome) { return (window.IMAGENS || {})[nome]; }
  function buscarFoto(titulo, cb) {
    if (titulo in cacheFotos) { cb(cacheFotos[titulo]); return; }
    if (pendentes[titulo]) { pendentes[titulo].push(cb); return; }
    pendentes[titulo] = [cb]; fila.push(titulo); rodarFila();
  }
  function rodarFila() {
    while (ativos < 2 && fila.length) {
      (function (titulo) {
        ativos++;
        var host = "pt.wikipedia.org", t = titulo;
        if (titulo.indexOf("en:") === 0) { host = "en.wikipedia.org"; t = titulo.slice(3); }
        else if (titulo.indexOf("commons:") === 0) { host = "commons.wikimedia.org"; t = titulo.slice(8); }
        var url = "https://" + host + "/api/rest_v1/page/summary/" + encodeURIComponent(t.replace(/ /g, "_"));
        fetch(url).then(function (r) {
          // 404, 429 etc.: não grava no cache, para tentar de novo numa próxima visita
          if (!r.ok) return "";
          return r.json().then(function (j) {
            var src = j && j.thumbnail ? j.thumbnail.source.replace(/\/\d+px-/, "/960px-") : "";
            cacheFotos[titulo] = src; gravar(CHAVE_FOTOS, cacheFotos); // 200: grava (src vazio = artigo sem foto)
            return src;
          });
        }).catch(function () { return ""; }).then(function (src) {
          (pendentes[titulo] || []).forEach(function (cb) { cb(src || ""); });
          delete pendentes[titulo]; ativos--; setTimeout(rodarFila, 150);
        });
      })(fila.shift());
    }
  }
  var observador = ("IntersectionObserver" in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      observador.unobserve(e.target); colocarFoto(e.target);
    });
  }, { rootMargin: "200px" }) : null;
  function colocarFoto(el) {
    buscarFoto(el.dataset.foto, function (src) {
      if (!src) return;
      var img = new Image(); img.alt = el.dataset.alt || "";      img.onload = function () { el.appendChild(img); el.classList.add("pronta"); };
      img.src = src;
    });
  }
  function carregarFotos(raiz) {
    Array.prototype.forEach.call(raiz.querySelectorAll(".foto[data-foto]"), function (el) {
      if (observador) observador.observe(el); else colocarFoto(el);
    });
  }

  /* ---------- índice de todos os lugares ---------- */
  var porId = {};
  window.PAISES.forEach(function (p) {
    CATS.forEach(function (c) {
      (p[c.k] || []).forEach(function (it) {
        if (c.k === "transportes") return;
        it.id = p.id + "." + c.k + "." + slug(it.nome);
        it.pais = p; it.cat = c;
        porId[it.id] = it;
      });
    });
  });

  /* ---------- estado ---------- */
  var estado = { pais: window.PAISES[0], cat: "pontos", tipo: "todos", busca: "" };
  var mapa, camada, marcadores = {};

  /* ---------- mapa ---------- */
  function iniciarMapa() {
    mapa = L.map("mapa", { worldCopyJump: true });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "© OpenStreetMap"
    }).addTo(mapa);
    camada = L.layerGroup().addTo(mapa);
  }
  function classePin(id) { return visitados[id] ? "ok" : (roteiro.indexOf(id) >= 0 ? "rot" : ""); }
  function icone(id) {
    return L.divIcon({ className: "", html: '<div class="pin ' + classePin(id) + '"></div>', iconSize: [22, 22], iconAnchor: [11, 22], popupAnchor: [0, -22] });
  }
  function popup(it) {
    var v = !!visitados[it.id], r = roteiro.indexOf(it.id) >= 0;
    return '<div class="pop"><h4>' + esc(it.nome) + '</h4><div class="sub">' + esc(it.cidade) + "</div>" +
      '<button data-act="visita" data-id="' + it.id + '">' + (v ? "✔ Visitado" : "Marcar visitado") + "</button>" +
      '<button data-act="roteiro" data-id="' + it.id + '">' + (r ? "− Roteiro" : "+ Roteiro") + "</button></div>";
  }
  function desenharPins(itens) {
    camada.clearLayers(); marcadores = {};
    var pts = [];
    itens.forEach(function (it) {
      var m = L.marker([it.lat, it.lng], { icon: icone(it.id), title: it.nome }).bindPopup(popup(it));
      m.addTo(camada); marcadores[it.id] = m; pts.push([it.lat, it.lng]);
    });
    if (pts.length > 1) mapa.fitBounds(pts, { padding: [40, 40], maxZoom: 9 });
    else if (pts.length === 1) mapa.setView(pts[0], 9);
    else mapa.setView(estado.pais.centro, estado.pais.zoom);
  }
  function atualizarPin(id) {
    var m = marcadores[id]; if (!m) return;
    m.setIcon(icone(id)); m.setPopupContent(popup(porId[id]));
  }

  /* ---------- dados visíveis ---------- */
  function itensDaCategoria(p, cat) {
    var lista = (p[cat] || []).slice();
    var q = norm(estado.busca.trim());
    if (cat === "hospedagem" && estado.tipo !== "todos") lista = lista.filter(function (i) { return i.tipo === estado.tipo; });
    return lista.sort(porNome);
  }
  function casaBusca(it, q) {
    return norm(it.nome + " " + (it.cidade || "") + " " + (it.desc || "") + " " + (it.de || "") + " " + (it.para || "")).indexOf(q) >= 0;
  }

  /* ---------- renderização ---------- */
  function htmlItem(it) {
    var v = !!visitados[it.id], r = roteiro.indexOf(it.id) >= 0, extra = "";
    if (it.tipo && TIPOS[it.tipo]) extra += '<span class="tag">' + TIPOS[it.tipo] + "</span>";
    if (it.dist) extra += '<span class="tag">⏱ ' + esc(it.dur) + "</span><span class=\"tag\">📏 " + esc(it.dist) + "</span>";
    else if (it.dur) extra += '<span class="tag">⏱ ' + esc(it.dur) + "</span>";
    var tit = tituloDe(it.nome);
    var foto = tit ? '<div class="foto" data-foto="' + esc(tit) + '" data-alt="' + esc(it.nome) + '"><span class="ph">' + it.cat.ic + "</span></div>" : "";
    return '<article class="item' + (v ? " visitado" : "") + '">' + foto + '<h3><button data-act="foco" data-id="' + it.id + '">' + esc(it.nome) + '</button></h3>' +
      '<div class="sub">' + extra + esc(it.cidade || "") + "</div><p>" + esc(it.desc) + "</p>" +
      '<div class="acoes"><button data-act="foco" data-id="' + it.id + '">📍 No mapa</button>' +
      '<button class="' + (v ? "on" : "") + '" data-act="visita" data-id="' + it.id + '">' + (v ? "✔ Visitado" : "Marcar visitado") + "</button>" +
      '<button class="' + (r ? "on-rot" : "") + '" data-act="roteiro" data-id="' + it.id + '">' + (r ? "✔ No roteiro" : "+ Roteiro") + "</button></div></article>";
  }
  function htmlTransporte(t) {
    return '<article class="item"><h3>' + esc(t.de) + " → " + esc(t.para) + '</h3><div class="sub"><span class="tag">' + esc(t.modo) + '</span><span class="tag">⏱ ' + esc(t.tempo) + "</span></div></article>";
  }

  function renderPaises() {
    $("paises").innerHTML = window.PAISES.map(function (p) {
      return '<button class="pasta' + (p === estado.pais ? " ativa" : "") + '" data-pais="' + p.id + '"><span class="bandeira">' + p.bandeira + "</span> 📁 " + esc(p.nome) + "</button>";
    }).join("");
  }
  function renderCapa() {
    var p = estado.pais, tit = (window.CAPAS || {})[p.id], c = $("capa");
    var total = Object.keys(porId).filter(function (id) { return porId[id].pais === p; }).length;
    c.innerHTML = '<div class="capa-foto"' + (tit ? ' data-foto="' + esc(tit) + '" data-alt="' + esc(p.nome) + '"' : "") + '></div>' +
      '<div class="capa-txt"><span class="capa-flag">' + p.bandeira + "</span><h1>" + esc(p.nome) + "</h1><p>" + total + " lugares para conhecer</p></div>";
    var f = c.querySelector(".capa-foto");
    if (tit) { f.classList.add("foto"); carregarFotos(c); }
  }
  function renderProgresso() {
    var ids = Object.keys(porId).filter(function (id) { return porId[id].pais === estado.pais; });
    var n = ids.filter(function (id) { return visitados[id]; }).length;
    var pct = ids.length ? Math.round((n / ids.length) * 100) : 0;
    $("progresso").innerHTML = "<strong>" + esc(estado.pais.nome) + "</strong>: " + n + " de " + ids.length + " lugares visitados (" + pct + '%)<div class="barra"><i style="width:' + pct + '%"></i></div>';
    $("cont-roteiro").textContent = roteiro.length;
  }
  function renderAbas() {
    $("abas").innerHTML = CATS.map(function (c) {
      var ativa = !estado.busca && c.k === estado.cat;
      return '<button class="aba' + (ativa ? " ativa" : "") + '" data-cat="' + c.k + '">' + c.ic + " " + c.nome + "</button>";
    }).join("");
  }
  function renderFiltros() {
    var el = $("filtros");
    if (estado.busca || estado.cat !== "hospedagem") { el.innerHTML = ""; return; }
    var tipos = ["todos"].concat(Object.keys(TIPOS));
    el.innerHTML = tipos.map(function (t) {
      return '<button class="chip' + (estado.tipo === t ? " ativa" : "") + '" data-tipo="' + t + '">' + (t === "todos" ? "Todos" : TIPOS[t]) + "</button>";
    }).join("");
  }

  function renderLista() {
    var el = $("lista"), html = "", visiveis = [];
    var q = norm(estado.busca.trim());
    if (q) {
      CATS.forEach(function (c) {
        var l = (estado.pais[c.k] || []).filter(function (i) { return casaBusca(i, q); }).sort(porNome);
        if (!l.length) return;
        html += '<div class="grupo">' + c.ic + " " + c.nome + "</div>";
        l.forEach(function (i) { html += c.k === "transportes" ? htmlTransporte(i) : htmlItem(i); if (i.id) visiveis.push(i); });
      });
      if (!html) html = '<div class="vazio">Nada encontrado para "' + esc(estado.busca) + '".</div>';
    } else if (estado.cat === "transportes") {
      var t = (estado.pais.transportes || []).slice().sort(function (a, b) { return a.de.localeCompare(b.de, "pt-BR") || a.para.localeCompare(b.para, "pt-BR"); });
      html = '<div class="grupo">Tempos aproximados · confirme antes de viajar</div>' + t.map(htmlTransporte).join("");
      CATS.forEach(function (c) { if (c.k !== "transportes") (estado.pais[c.k] || []).forEach(function (i) { visiveis.push(i); }); });
    } else if (estado.cat === "hospedagem") {
      var l2 = itensDaCategoria(estado.pais, "hospedagem");
      [1, 2, 3].forEach(function (f) {
        var g = l2.filter(function (i) { return i.faixa === f; });
        if (!g.length) return;
        html += '<div class="grupo">' + FAIXAS[f] + "</div>" + g.map(htmlItem).join("");
        visiveis = visiveis.concat(g);
      });
      if (!html) html = '<div class="vazio">Nenhuma opção desse tipo ainda.</div>';
    } else {
      var l3 = itensDaCategoria(estado.pais, estado.cat);
      html = l3.map(htmlItem).join("") || '<div class="vazio">Ainda sem itens aqui.</div>';
      visiveis = l3;
    }
    el.innerHTML = html;
    carregarFotos(el);
    return visiveis;
  }

  function renderTudo(redesenharMapa) {
    renderPaises(); if (redesenharMapa) renderCapa(); renderProgresso(); renderAbas(); renderFiltros();
    var pos = $("lista").scrollTop;
    var vis = renderLista();
    if (!redesenharMapa) $("lista").scrollTop = pos;
    if (redesenharMapa) desenharPins(vis);
  }

  /* ---------- ações ---------- */
  function alternarVisita(id) {
    if (visitados[id]) delete visitados[id]; else visitados[id] = true;
    gravar("gv_visitados", visitados); refresh(id);
  }
  function alternarRoteiro(id) {
    var i = roteiro.indexOf(id);
    if (i >= 0) roteiro.splice(i, 1); else roteiro.push(id);
    gravar("gv_roteiro", roteiro); refresh(id);
  }
  function refresh(id) {
    atualizarPin(id); renderProgresso();
    var pos = $("lista").scrollTop; renderLista(); $("lista").scrollTop = pos;
    if ($("dlg-roteiro").open) renderRoteiro();
  }
  function focar(id) {
    var m = marcadores[id], it = porId[id];
    if (!m || !it) return;
    mapa.flyTo([it.lat, it.lng], Math.max(mapa.getZoom(), 12), { duration: 0.8 });
    m.openPopup();
    if (window.innerWidth <= 860) $("mapa").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------- roteiro ---------- */
  function textoRoteiro() {
    var partes = [];
    window.PAISES.forEach(function (p) {
      var ids = roteiro.filter(function (id) { return porId[id] && porId[id].pais === p; });
      if (!ids.length) return;
      partes.push(p.bandeira + " " + p.nome);
      ids.forEach(function (id, n) { partes.push("  " + (n + 1) + ". " + porId[id].nome + " (" + porId[id].cidade + ")"); });
      partes.push("");
    });
    return partes.join("\n").trim();
  }
  function renderRoteiro() {
    var html = "";
    window.PAISES.forEach(function (p) {
      var ids = roteiro.filter(function (id) { return porId[id] && porId[id].pais === p; });
      if (!ids.length) return;
      html += '<div class="grupo">' + p.bandeira + " " + esc(p.nome) + "</div>";
      ids.forEach(function (id) {
        var it = porId[id];
        html += '<div class="r-linha"><span>' + it.cat.ic + " " + esc(it.nome) + ' <span class="sub">· ' + esc(it.cidade) + '</span></span><button data-act="roteiro" data-id="' + id + '" aria-label="Remover">✕</button></div>';
      });
    });
    $("roteiro-corpo").innerHTML = html || '<div class="vazio">Seu roteiro está vazio. Use "+ Roteiro" nos lugares que você quer visitar.</div>';
  }

  /* ---------- eventos ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-act],[data-pais],[data-cat],[data-tipo]");
    if (!b) return;
    if (b.dataset.act) {
      var id = b.dataset.id;
      if (b.dataset.act === "visita") alternarVisita(id);
      else if (b.dataset.act === "roteiro") alternarRoteiro(id);
      else if (b.dataset.act === "foco") focar(id);
    } else if (b.dataset.pais) {
      estado.pais = window.PAISES.filter(function (p) { return p.id === b.dataset.pais; })[0];
      estado.busca = ""; $("busca").value = ""; estado.tipo = "todos"; renderTudo(true);
    } else if (b.dataset.cat) {
      estado.cat = b.dataset.cat; estado.busca = ""; $("busca").value = ""; estado.tipo = "todos"; renderTudo(true);
    } else if (b.dataset.tipo) {
      estado.tipo = b.dataset.tipo; renderTudo(true);
    }
  });
  $("busca").addEventListener("input", function (e) { estado.busca = e.target.value; renderTudo(true); });
  $("btn-roteiro").addEventListener("click", function () { renderRoteiro(); $("dlg-roteiro").showModal(); });
  $("fechar-roteiro").addEventListener("click", function () { $("dlg-roteiro").close(); });
  $("limpar-roteiro").addEventListener("click", function () {
    if (!roteiro.length || !confirm("Remover todos os lugares do roteiro?")) return;
    var ids = roteiro.slice(); roteiro = []; gravar("gv_roteiro", roteiro);
    ids.forEach(atualizarPin); renderProgresso(); renderLista(); renderRoteiro();
  });
  $("copiar-roteiro").addEventListener("click", function () {
    var t = textoRoteiro(); if (!t) return;
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { $("copiar-roteiro").textContent = "Copiado ✔"; setTimeout(function () { $("copiar-roteiro").textContent = "Copiar texto"; }, 1500); });
  });

  iniciarMapa();
  renderTudo(true);
})();
