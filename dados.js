/* ============================================================
   DADOS DO SITE
   Para adicionar um país: copie um bloco inteiro de "PAISES" e edite.
   Cada lugar: { nome, cidade, desc, lat, lng }
   Hospedagem tem ainda: tipo (hotel|hostel|pousada|camping|aluguel) e faixa (1|2|3)
   Rotas têm ainda: tipo ("Trilha"...), dur, dist
   Transportes: { de, para, modo, tempo }
   Preços e tempos são APROXIMADOS: sempre confirme antes de viajar.
   ============================================================ */
window.PAISES = [
  {
    id: "brasil", nome: "Brasil", bandeira: "🇧🇷", centro: [-14.2, -51.9], zoom: 4,
    pontos: [
      { nome: "Cataratas do Iguaçu", cidade: "Foz do Iguaçu (PR)", desc: "Um dos maiores conjuntos de quedas d'água do mundo, na fronteira com a Argentina.", lat: -25.6953, lng: -54.4367 },
      { nome: "Centro Histórico de Ouro Preto", cidade: "Ouro Preto (MG)", desc: "Igrejas barrocas e ladeiras de pedra da era do ouro.", lat: -20.3856, lng: -43.5035 },
      { nome: "Cristo Redentor", cidade: "Rio de Janeiro (RJ)", desc: "Símbolo do Brasil no alto do Corcovado, com vista da cidade inteira.", lat: -22.9519, lng: -43.2105 },
      { nome: "Escadaria Selarón", cidade: "Rio de Janeiro (RJ)", desc: "Escadaria colorida de azulejos entre Lapa e Santa Teresa.", lat: -22.9154, lng: -43.1788 },
      { nome: "Pão de Açúcar", cidade: "Rio de Janeiro (RJ)", desc: "Bondinho até o morro com vista da baía de Guanabara.", lat: -22.9486, lng: -43.1566 },
      { nome: "Pelourinho", cidade: "Salvador (BA)", desc: "Casarões coloridos, igrejas e música no coração da Bahia.", lat: -12.9714, lng: -38.5124 },
      { nome: "Teatro Amazonas", cidade: "Manaus (AM)", desc: "Ópera da época da borracha, no meio da floresta.", lat: -3.1303, lng: -60.0233 },
      { nome: "Paraty histórica", cidade: "Paraty (RJ)", desc: "Centro colonial com ruas de pedra que alagam com a maré.", lat: -23.2178, lng: -44.7131 }
    ],
    comidas: [
      { nome: "Acarajé", cidade: "Salvador (BA)", desc: "Bolinho de feijão-fradinho frito no dendê, recheado com vatapá e camarão.", lat: -12.9714, lng: -38.5014 },
      { nome: "Baião de dois", cidade: "Fortaleza (CE)", desc: "Arroz com feijão-de-corda, queijo coalho e carne de sol.", lat: -3.7319, lng: -38.5267 },
      { nome: "Churrasco gaúcho", cidade: "Porto Alegre (RS)", desc: "Cortes assados no espeto em churrascarias rodízio.", lat: -30.0346, lng: -51.2177 },
      { nome: "Feijoada", cidade: "Rio de Janeiro (RJ)", desc: "Feijão-preto com carnes, servido com arroz, couve e laranja.", lat: -22.9068, lng: -43.1729 },
      { nome: "Moqueca capixaba", cidade: "Vitória (ES)", desc: "Peixe na panela de barro com urucum, sem dendê nem leite de coco.", lat: -20.3155, lng: -40.3128 },
      { nome: "Pão de queijo", cidade: "Belo Horizonte (MG)", desc: "O clássico mineiro, quentinho, com café coado.", lat: -19.9167, lng: -43.9345 },
      { nome: "Pirarucu e tucumã", cidade: "Manaus (AM)", desc: "Peixe amazônico e sanduíche regional de tucumã.", lat: -3.119, lng: -60.0217 },
      { nome: "Tacacá", cidade: "Belém (PA)", desc: "Caldo de tucupi com jambu, goma e camarão, servido em cuia.", lat: -1.4558, lng: -48.4902 }
    ],
    paisagens: [
      { nome: "Chapada Diamantina", cidade: "Lençóis (BA)", desc: "Cachoeiras, cavernas, poços azuis e mirantes de cima de morro.", lat: -12.5667, lng: -41.3833 },
      { nome: "Fernando de Noronha", cidade: "Pernambuco", desc: "Arquipélago de praias de água cristalina e vida marinha abundante.", lat: -3.8549, lng: -32.4239 },
      { nome: "Jericoacoara", cidade: "Jijoca (CE)", desc: "Dunas, lagoas e pôr do sol famoso na Duna do Pôr do Sol.", lat: -2.7975, lng: -40.5136 },
      { nome: "Lençóis Maranhenses", cidade: "Barreirinhas (MA)", desc: "Dunas brancas com lagoas de água azul na época das chuvas.", lat: -2.5333, lng: -43.1167 },
      { nome: "Pantanal", cidade: "Mato Grosso / Mato Grosso do Sul", desc: "A maior planície alagável do mundo, ótima para ver onças e jacarés.", lat: -17.8, lng: -57.4 },
      { nome: "Rio da Prata", cidade: "Bonito (MS)", desc: "Rios de água transparente para flutuação.", lat: -21.2, lng: -56.5 },
      { nome: "Monte Roraima", cidade: "Roraima", desc: "Tepui de topo plano na tríplice fronteira com Venezuela e Guiana.", lat: -5.1433, lng: -60.7619 }
    ],
    experiencias: [
      { nome: "Carnaval de Salvador", cidade: "Salvador (BA)", desc: "Trios elétricos, blocos e mais de uma semana de festa.", lat: -12.9777, lng: -38.5016 },
      { nome: "Festival de Parintins", cidade: "Parintins (AM)", desc: "Disputa entre os bois Garantido e Caprichoso, em junho.", lat: -2.6283, lng: -56.7358 },
      { nome: "Mergulho em Noronha", cidade: "Fernando de Noronha (PE)", desc: "Mergulho com tartarugas, golfinhos e tubarões-limão.", lat: -3.84, lng: -32.41 },
      { nome: "Passeio de buggy", cidade: "Jericoacoara (CE)", desc: "Percurso pelas dunas e lagoas, como Tatajuba e Pedra Furada.", lat: -2.8, lng: -40.52 },
      { nome: "Safári no Pantanal", cidade: "Poconé (MT)", desc: "Observação de onças-pintadas e aves pela Transpantaneira.", lat: -16.2578, lng: -56.6228 },
      { nome: "Réveillon em Copacabana", cidade: "Rio de Janeiro (RJ)", desc: "Fogos e show com milhões de pessoas vestidas de branco.", lat: -22.9711, lng: -43.1822 },
      { nome: "Trem Maria Fumaça", cidade: "Tiradentes (MG)", desc: "Passeio de trem a vapor até São João del-Rei.", lat: -21.11, lng: -44.175 }
    ],
    lojas: [
      { nome: "Feira de Arte de Ipanema", cidade: "Rio de Janeiro (RJ)", desc: "Feira aos domingos na Praça General Osório: artesanato e arte.", lat: -22.9843, lng: -43.2049 },
      { nome: "Feira de São Cristóvão", cidade: "Rio de Janeiro (RJ)", desc: "Centro de tradições nordestinas com comida, forró e artesanato.", lat: -22.8966, lng: -43.2223 },
      { nome: "Feira de Caruaru", cidade: "Caruaru (PE)", desc: "Uma das maiores feiras livres do país, com barro e artesanato.", lat: -8.276, lng: -35.976 },
      { nome: "Mercado Modelo", cidade: "Salvador (BA)", desc: "Artesanato baiano com vista para a Baía de Todos os Santos.", lat: -12.9735, lng: -38.5123 },
      { nome: "Mercado Municipal de São Paulo", cidade: "São Paulo (SP)", desc: "O lanche de mortadela e o pastel de bacalhau são famosos.", lat: -23.5416, lng: -46.6294 },
      { nome: "Ver-o-Peso", cidade: "Belém (PA)", desc: "Mercado à beira do rio com ervas, peixes e frutas amazônicas.", lat: -1.4528, lng: -48.5036 }
    ],
    hospedagem: [
      { nome: "Acampamentos no Vale do Capão", cidade: "Chapada Diamantina (BA)", tipo: "camping", faixa: 1, desc: "Região sugerida: campings simples perto de trilhas.", lat: -12.617, lng: -41.472 },
      { nome: "Camping no Parque Nacional do Itatiaia", cidade: "Itatiaia (RJ)", tipo: "camping", faixa: 1, desc: "Áreas de camping dentro do parque.", lat: -22.45, lng: -44.6167 },
      { nome: "Copacabana Palace", cidade: "Rio de Janeiro (RJ)", tipo: "hotel", faixa: 3, desc: "Hotel histórico na orla de Copacabana.", lat: -22.9672, lng: -43.1789 },
      { nome: "Hostels em Santa Teresa", cidade: "Rio de Janeiro (RJ)", tipo: "hostel", faixa: 1, desc: "Região sugerida: bairro boêmio com vários hostels.", lat: -22.9225, lng: -43.186 },
      { nome: "Hostels no centro de Foz", cidade: "Foz do Iguaçu (PR)", tipo: "hostel", faixa: 1, desc: "Região sugerida: perto da rodoviária e dos ônibus para as Cataratas.", lat: -25.5478, lng: -54.5882 },
      { nome: "Hotel das Cataratas", cidade: "Foz do Iguaçu (PR)", tipo: "hotel", faixa: 3, desc: "Único hotel dentro do Parque Nacional do Iguaçu.", lat: -25.687, lng: -54.437 },
      { nome: "Pousadas do centro histórico", cidade: "Paraty (RJ)", tipo: "pousada", faixa: 2, desc: "Região sugerida: casarões coloniais transformados em pousadas.", lat: -23.2178, lng: -44.7131 },
      { nome: "Pousadas em casarões", cidade: "Salvador (BA)", tipo: "pousada", faixa: 2, desc: "Região sugerida: Pelourinho e Santo Antônio Além do Carmo.", lat: -12.9714, lng: -38.5124 },
      { nome: "Pousadas na vila", cidade: "Jericoacoara (CE)", tipo: "pousada", faixa: 2, desc: "Região sugerida: ruas de areia no centrinho.", lat: -2.7975, lng: -40.5136 },
      { nome: "Apartamentos de temporada", cidade: "Rio de Janeiro (RJ)", tipo: "aluguel", faixa: 2, desc: "Região sugerida: Ipanema e Leblon.", lat: -22.9838, lng: -43.2096 }
    ],
    rotas: [
      { nome: "Caminho da Fé", tipo: "Peregrinação", dur: "10 a 14 dias", dist: "~318 km", desc: "De Águas da Prata (SP) até Aparecida (SP).", lat: -21.933, lng: -46.717 },
      { nome: "Monte Roraima", tipo: "Trilha", dur: "~6 dias", dist: "—", desc: "Ida e volta ao topo do tepui, com guia e acampamento.", lat: -5.1433, lng: -60.7619 },
      { nome: "Pico da Bandeira", tipo: "Trilha", dur: "~2 dias", dist: "—", desc: "Terceiro ponto mais alto do Brasil, no Caparaó.", lat: -20.4244, lng: -41.7981 },
      { nome: "Travessia Petrópolis–Teresópolis", tipo: "Trilha", dur: "~3 dias", dist: "~30 km", desc: "Clássica travessia da Serra dos Órgãos.", lat: -22.452, lng: -42.983 },
      { nome: "Vale do Pati", tipo: "Trilha", dur: "3 a 5 dias", dist: "—", desc: "Caminhada entre casas de moradores e mirantes na Chapada Diamantina.", lat: -12.67, lng: -41.52 }
    ],
    transportes: [
      { de: "Foz do Iguaçu (centro)", para: "Cataratas do Iguaçu", modo: "Ônibus urbano", tempo: "~40 min" },
      { de: "Recife", para: "Fernando de Noronha", modo: "Avião", tempo: "~1h30" },
      { de: "Rio de Janeiro", para: "Paraty", modo: "Ônibus", tempo: "~4h" },
      { de: "Rio de Janeiro", para: "São Paulo", modo: "Avião", tempo: "~1h" },
      { de: "Rio de Janeiro", para: "São Paulo", modo: "Ônibus", tempo: "~6h" },
      { de: "Salvador", para: "Lençóis (Chapada Diamantina)", modo: "Ônibus", tempo: "~6 a 7h" }
    ]
  },

  {
    id: "portugal", nome: "Portugal", bandeira: "🇵🇹", centro: [39.6, -8.0], zoom: 6,
    pontos: [
      { nome: "Castelo de São Jorge", cidade: "Lisboa", desc: "Castelo medieval com vista panorâmica sobre o Tejo.", lat: 38.7139, lng: -9.1334 },
      { nome: "Livraria Lello", cidade: "Porto", desc: "Uma das livrarias mais bonitas do mundo, com escadaria vermelha.", lat: 41.1469, lng: -8.615 },
      { nome: "Mosteiro dos Jerónimos", cidade: "Lisboa", desc: "Obra-prima do estilo manuelino, em Belém.", lat: 38.6979, lng: -9.2068 },
      { nome: "Palácio da Pena", cidade: "Sintra", desc: "Palácio colorido no alto da serra.", lat: 38.7876, lng: -9.3906 },
      { nome: "Torre de Belém", cidade: "Lisboa", desc: "Torre fortificada do século XVI à beira do rio.", lat: 38.6916, lng: -9.216 },
      { nome: "Torre dos Clérigos", cidade: "Porto", desc: "Subida de mais de 200 degraus com vista do Porto.", lat: 41.1457, lng: -8.6146 },
      { nome: "Universidade de Coimbra", cidade: "Coimbra", desc: "Uma das universidades mais antigas da Europa, com a Biblioteca Joanina.", lat: 40.2075, lng: -8.4254 }
    ],
    comidas: [
      { nome: "Bacalhau à Brás", cidade: "Lisboa", desc: "Bacalhau desfiado com batata palha e ovos.", lat: 38.7223, lng: -9.1393 },
      { nome: "Cataplana de marisco", cidade: "Lagos (Algarve)", desc: "Frutos do mar cozidos na panela de cobre típica.", lat: 37.1028, lng: -8.673 },
      { nome: "Francesinha", cidade: "Porto", desc: "Sanduíche com carnes, queijo derretido e molho picante.", lat: 41.1496, lng: -8.6109 },
      { nome: "Leitão da Bairrada", cidade: "Mealhada", desc: "Leitão assado crocante, servido com espumante local.", lat: 40.3667, lng: -8.45 },
      { nome: "Pastel de nata", cidade: "Lisboa (Belém)", desc: "A casa mais famosa é a Pastéis de Belém.", lat: 38.6975, lng: -9.2032 },
      { nome: "Sardinhas assadas", cidade: "Lisboa", desc: "Marca dos Santos Populares em junho.", lat: 38.7117, lng: -9.1295 },
      { nome: "Vinho do Porto", cidade: "Vila Nova de Gaia", desc: "Visita às caves e degustação em frente ao Porto.", lat: 41.1333, lng: -8.6167 }
    ],
    paisagens: [
      { nome: "Cabo da Roca", cidade: "Sintra", desc: "O ponto mais ocidental da Europa continental.", lat: 38.7804, lng: -9.4989 },
      { nome: "Gruta de Benagil", cidade: "Lagoa (Algarve)", desc: "Caverna marinha com abertura no teto, visitada de barco ou caiaque.", lat: 37.0873, lng: -8.4257 },
      { nome: "Lagoa das Sete Cidades", cidade: "São Miguel (Açores)", desc: "Lagoas gêmeas, azul e verde, em cratera vulcânica.", lat: 37.842, lng: -25.7884 },
      { nome: "Parque Nacional da Peneda-Gerês", cidade: "Norte de Portugal", desc: "Cascatas, lagos e vilarejos de pedra.", lat: 41.7333, lng: -8.15 },
      { nome: "Pico do Arieiro", cidade: "Ilha da Madeira", desc: "Mirante a 1.800 m acima do mar de nuvens.", lat: 32.7351, lng: -16.9283 },
      { nome: "Praia da Marinha", cidade: "Lagoa (Algarve)", desc: "Falésias douradas e arcos de rocha.", lat: 37.087, lng: -8.4125 },
      { nome: "Vale do Douro", cidade: "Pinhão", desc: "Vinhedos em socalcos ao longo do rio Douro.", lat: 41.1894, lng: -7.5457 }
    ],
    experiencias: [
      { nome: "Cruzeiro no Douro", cidade: "Porto", desc: "Passeio de barco pelas pontes ou até o Alto Douro.", lat: 41.1405, lng: -8.6117 },
      { nome: "Eléctrico 28", cidade: "Lisboa", desc: "Percurso de bonde histórico por Alfama, Graça e Estrela.", lat: 38.7138, lng: -9.1393 },
      { nome: "Fado ao vivo em Alfama", cidade: "Lisboa", desc: "Casas de fado com jantar ou só um copo de vinho.", lat: 38.711, lng: -9.1295 },
      { nome: "Golfinhos no Sado", cidade: "Setúbal", desc: "Passeio de barco para ver golfinhos-roazes.", lat: 38.5244, lng: -8.8882 },
      { nome: "Passadiços do Paiva", cidade: "Arouca", desc: "Caminhada em passarela de madeira ao lado do rio.", lat: 40.94, lng: -8.235 },
      { nome: "São João do Porto", cidade: "Porto", desc: "Festa popular em 23 de junho, com martelinhos e sardinhas.", lat: 41.1496, lng: -8.611 },
      { nome: "Surf em Nazaré", cidade: "Nazaré", desc: "Ondas gigantes no inverno, para assistir do farol.", lat: 39.6017, lng: -9.0714 }
    ],
    lojas: [
      { nome: "A Vida Portuguesa", cidade: "Lisboa (Chiado)", desc: "Produtos portugueses tradicionais: sabonetes, conservas e louças.", lat: 38.7106, lng: -9.1417 },
      { nome: "Feira da Ladra", cidade: "Lisboa", desc: "Mercado de antiguidades e usados, às terças e sábados.", lat: 38.7156, lng: -9.1255 },
      { nome: "Mercado do Bolhão", cidade: "Porto", desc: "Mercado tradicional de frutas, flores e queijos.", lat: 41.1488, lng: -8.6065 },
      { nome: "Rua de Santa Catarina", cidade: "Porto", desc: "Rua de comércio e lojas de rua.", lat: 41.1481, lng: -8.607 },
      { nome: "Time Out Market", cidade: "Lisboa", desc: "Mercado da Ribeira, com barracas de chefs conhecidos.", lat: 38.7068, lng: -9.1458 }
    ],
    hospedagem: [
      { nome: "Hostels na Baixa", cidade: "Lisboa", tipo: "hostel", faixa: 1, desc: "Região sugerida: centro, perto de tudo a pé.", lat: 38.7107, lng: -9.1393 },
      { nome: "Hostels na Ribeira", cidade: "Porto", tipo: "hostel", faixa: 1, desc: "Região sugerida: perto do rio e do centro histórico.", lat: 41.1405, lng: -8.6117 },
      { nome: "Campings no Algarve", cidade: "Sagres", tipo: "camping", faixa: 1, desc: "Região sugerida: campings perto de praias de surf.", lat: 37.0089, lng: -8.9402 },
      { nome: "Quintas no Douro", cidade: "Pinhão", tipo: "pousada", faixa: 2, desc: "Região sugerida: quintas com hospedagem e vinhos.", lat: 41.1894, lng: -7.5457 },
      { nome: "Apartamentos em Alfama", cidade: "Lisboa", tipo: "aluguel", faixa: 2, desc: "Região sugerida: bairro histórico, ruas estreitas.", lat: 38.7110, lng: -9.1295 },
      { nome: "Hotéis em Cascais", cidade: "Cascais", tipo: "hotel", faixa: 3, desc: "Região sugerida: litoral, a 30 min de Lisboa de trem.", lat: 38.6979, lng: -9.4215 },
      { nome: "Pestana Palace", cidade: "Lisboa", tipo: "hotel", faixa: 3, desc: "Palácio do século XIX transformado em hotel.", lat: 38.7036, lng: -9.1869 }
    ],
    rotas: [
      { nome: "Caminho Português de Santiago", tipo: "Peregrinação", dur: "10 a 12 dias", dist: "~240 km", desc: "Do Porto até Santiago de Compostela.", lat: 41.1496, lng: -8.611 },
      { nome: "Levada do Caldeirão Verde", tipo: "Trilha", dur: "~5 h", dist: "~13 km", desc: "Caminho ao lado de canal, entre cascatas, na Madeira.", lat: 32.7889, lng: -16.9 },
      { nome: "Passadiços do Paiva", tipo: "Trilha", dur: "~3 h", dist: "~8,7 km", desc: "Passarela de madeira no desfiladeiro do rio Paiva.", lat: 40.94, lng: -8.235 },
      { nome: "Rota Vicentina – Trilho dos Pescadores", tipo: "Trilha", dur: "4 a 5 dias", dist: "~120 km", desc: "Trilha na costa, de Porto Covo ao Cabo de São Vicente.", lat: 37.859, lng: -8.784 }
    ],
    transportes: [
      { de: "Lisboa", para: "Coimbra", modo: "Trem", tempo: "~1h30" },
      { de: "Lisboa", para: "Faro", modo: "Trem", tempo: "~3h" },
      { de: "Lisboa", para: "Porto", modo: "Trem (Alfa Pendular)", tempo: "~3h" },
      { de: "Lisboa", para: "Sintra", modo: "Trem", tempo: "~40 min" },
      { de: "Porto", para: "Pinhão (Douro)", modo: "Trem", tempo: "~2h30" }
    ]
  },

  {
    id: "japao", nome: "Japão", bandeira: "🇯🇵", centro: [36.2, 138.2], zoom: 5,
    pontos: [
      { nome: "Castelo de Himeji", cidade: "Himeji", desc: "O castelo feudal mais bem preservado do Japão.", lat: 34.8394, lng: 134.6939 },
      { nome: "Fushimi Inari", cidade: "Quioto", desc: "Milhares de portais vermelhos (torii) pela montanha.", lat: 34.9671, lng: 135.7727 },
      { nome: "Kinkaku-ji", cidade: "Quioto", desc: "O Pavilhão Dourado, refletido no lago.", lat: 35.0394, lng: 135.7292 },
      { nome: "Parque Memorial da Paz", cidade: "Hiroshima", desc: "Memorial e museu sobre a bomba atômica.", lat: 34.3955, lng: 132.4536 },
      { nome: "Santuário Itsukushima", cidade: "Miyajima", desc: "Portal flutuante (torii) na maré alta.", lat: 34.296, lng: 132.3198 },
      { nome: "Senso-ji", cidade: "Tóquio (Asakusa)", desc: "Templo mais antigo de Tóquio, com a Kaminarimon.", lat: 35.7148, lng: 139.7967 },
      { nome: "Todai-ji", cidade: "Nara", desc: "Templo com o Grande Buda de bronze.", lat: 34.689, lng: 135.8398 },
      { nome: "Torre de Tóquio", cidade: "Tóquio", desc: "Inspirada na Torre Eiffel, com vista noturna.", lat: 35.6586, lng: 139.7454 }
    ],
    comidas: [
      { nome: "Kaiseki", cidade: "Quioto", desc: "Refeição tradicional em vários pratos pequenos.", lat: 35.0116, lng: 135.7681 },
      { nome: "Matcha de Uji", cidade: "Uji", desc: "Doces e chás feitos com o matcha mais famoso do Japão.", lat: 34.8845, lng: 135.8 },
      { nome: "Okonomiyaki", cidade: "Hiroshima", desc: "Panqueca salgada em camadas, com macarrão.", lat: 34.3853, lng: 132.4553 },
      { nome: "Ramen tonkotsu", cidade: "Fukuoka", desc: "Caldo branco de osso de porco com macarrão fino.", lat: 33.5902, lng: 130.4017 },
      { nome: "Sushi", cidade: "Tóquio (Toyosu)", desc: "Peixe fresco do mercado de Toyosu.", lat: 35.6455, lng: 139.7845 },
      { nome: "Takoyaki", cidade: "Osaka (Dotonbori)", desc: "Bolinhas de polvo na chapa, com molho e maionese.", lat: 34.6687, lng: 135.5013 },
      { nome: "Wagyu de Kobe", cidade: "Kobe", desc: "Carne marmorizada de gado de origem local.", lat: 34.6901, lng: 135.1956 }
    ],
    paisagens: [
      { nome: "Bambuzal de Arashiyama", cidade: "Quioto", desc: "Caminho entre bambus gigantes, melhor de manhã cedo.", lat: 35.017, lng: 135.6713 },
      { nome: "Furano e Biei", cidade: "Hokkaido", desc: "Campos de lavanda no verão.", lat: 43.342, lng: 142.383 },
      { nome: "Jigokudani", cidade: "Nagano", desc: "Macacos-japoneses banhando-se em fontes termais.", lat: 36.7326, lng: 138.4624 },
      { nome: "Kamikochi", cidade: "Nagano", desc: "Vale alpino com rios cristalinos e picos nevados.", lat: 36.25, lng: 137.637 },
      { nome: "Monte Fuji", cidade: "Yamanashi / Shizuoka", desc: "O vulcão símbolo do Japão, 3.776 m.", lat: 35.3606, lng: 138.7274 },
      { nome: "Shirakawa-go", cidade: "Gifu", desc: "Vilarejo de casas de telhado de palha, coberto de neve no inverno.", lat: 36.2578, lng: 136.9061 }
    ],
    experiencias: [
      { nome: "Cruzamento de Shibuya", cidade: "Tóquio", desc: "O cruzamento de pedestres mais movimentado do mundo.", lat: 35.6595, lng: 139.7005 },
      { nome: "Hanami (flores de cerejeira)", cidade: "Tóquio (Parque Ueno)", desc: "Piquenique sob as cerejeiras em flor, no fim de março e abril.", lat: 35.7156, lng: 139.7745 },
      { nome: "Onsen em Hakone", cidade: "Hakone", desc: "Banho termal tradicional, com vista para o Fuji em dias claros.", lat: 35.2333, lng: 139.107 },
      { nome: "Sumô em Ryogoku", cidade: "Tóquio", desc: "Torneios em janeiro, maio e setembro.", lat: 35.6969, lng: 139.7934 },
      { nome: "Cerimônia do chá", cidade: "Quioto", desc: "Aula guiada de preparo e degustação do chá.", lat: 35.0036, lng: 135.775 },
      { nome: "Noite em ryokan", cidade: "Quioto", desc: "Pousada tradicional com tatame, futon e refeição kaiseki.", lat: 35.0116, lng: 135.7681 }
    ],
    lojas: [
      { nome: "Akihabara", cidade: "Tóquio", desc: "Eletrônicos, animes, mangás e jogos.", lat: 35.6984, lng: 139.7731 },
      { nome: "Ginza", cidade: "Tóquio", desc: "Lojas de luxo e a grande loja de papelaria Itoya.", lat: 35.6717, lng: 139.765 },
      { nome: "Kappabashi", cidade: "Tóquio", desc: "Rua de utensílios de cozinha, facas e comida de plástico.", lat: 35.7143, lng: 139.7886 },
      { nome: "Nakamise-dori", cidade: "Tóquio (Asakusa)", desc: "Rua de lembrancinhas antes do templo Senso-ji.", lat: 35.7107, lng: 139.7963 },
      { nome: "Mercado Nishiki", cidade: "Quioto", desc: "A \"cozinha de Quioto\": petiscos, picles e facas.", lat: 35.005, lng: 135.7646 }
    ],
    hospedagem: [
      { nome: "Cápsulas em Quioto", cidade: "Quioto", tipo: "hostel", faixa: 1, desc: "Região sugerida: perto da estação de Quioto.", lat: 34.9858, lng: 135.7588 },
      { nome: "Hostels em Asakusa", cidade: "Tóquio", tipo: "hostel", faixa: 1, desc: "Região sugerida: bairro tradicional, perto do Senso-ji.", lat: 35.7148, lng: 139.7967 },
      { nome: "Camping Fumotoppara", cidade: "Fujinomiya", tipo: "camping", faixa: 1, desc: "Camping com vista para o Monte Fuji.", lat: 35.399, lng: 138.57 },
      { nome: "Machiya em Gion", cidade: "Quioto", tipo: "aluguel", faixa: 2, desc: "Região sugerida: casas tradicionais de madeira para alugar.", lat: 35.0037, lng: 135.775 },
      { nome: "Hotéis de negócios em Shinjuku", cidade: "Tóquio", tipo: "hotel", faixa: 2, desc: "Região sugerida: quartos compactos, perto de metrô.", lat: 35.6938, lng: 139.7034 },
      { nome: "Park Hyatt Tokyo", cidade: "Tóquio", tipo: "hotel", faixa: 3, desc: "Hotel de luxo nos andares altos de Shinjuku.", lat: 35.6855, lng: 139.691 },
      { nome: "Ryokan em Hakone", cidade: "Hakone", tipo: "pousada", faixa: 3, desc: "Região sugerida: com onsen privativo e jantar incluso.", lat: 35.2333, lng: 139.107 }
    ],
    rotas: [
      { nome: "Caminho da Filosofia", tipo: "Caminhada", dur: "~30 min", dist: "~2 km", desc: "Canal cercado de cerejeiras, de Ginkaku-ji a Nanzen-ji.", lat: 35.027, lng: 135.7948 },
      { nome: "Kumano Kodo (Nakahechi)", tipo: "Peregrinação", dur: "3 a 5 dias", dist: "~70 km", desc: "Trilhas antigas de peregrinos em Wakayama.", lat: 33.718, lng: 135.425 },
      { nome: "Nakasendo: Magome a Tsumago", tipo: "Trilha", dur: "~3 h", dist: "~8 km", desc: "Antiga estrada entre cidades-posto da época Edo.", lat: 35.524, lng: 137.564 },
      { nome: "Subida do Monte Fuji (Yoshida)", tipo: "Trilha", dur: "6 a 8 h de subida", dist: "—", desc: "Aberta apenas no verão, de julho a setembro.", lat: 35.392, lng: 138.73 }
    ],
    transportes: [
      { de: "Osaka", para: "Nara", modo: "Trem", tempo: "~40 min" },
      { de: "Quioto", para: "Osaka", modo: "Trem (JR Rápido)", tempo: "~30 min" },
      { de: "Tóquio", para: "Hakone", modo: "Trem (Romancecar)", tempo: "~1h30" },
      { de: "Tóquio", para: "Hiroshima", modo: "Shinkansen", tempo: "~4h" },
      { de: "Tóquio", para: "Quioto", modo: "Shinkansen (Nozomi)", tempo: "~2h15" }
    ]
  },

  {
    id: "italia", nome: "Itália", bandeira: "🇮🇹", centro: [42.5, 12.5], zoom: 5,
    pontos: [
      { nome: "Basílica de São Pedro", cidade: "Vaticano", desc: "A maior igreja do cristianismo, com a cúpula de Michelangelo.", lat: 41.9022, lng: 12.4539 },
      { nome: "Coliseu", cidade: "Roma", desc: "Anfiteatro romano de quase 2.000 anos, ao lado do Fórum Romano.", lat: 41.8902, lng: 12.4922 },
      { nome: "Duomo de Milão", cidade: "Milão", desc: "Catedral gótica com terraço entre as agulhas de mármore.", lat: 45.4642, lng: 9.1916 },
      { nome: "Fontana di Trevi", cidade: "Roma", desc: "Fonte barroca onde se joga uma moeda para voltar a Roma.", lat: 41.9009, lng: 12.4833 },
      { nome: "Galleria degli Uffizi", cidade: "Florença", desc: "Botticelli, Leonardo e Michelangelo em um só museu.", lat: 43.7687, lng: 11.2553 },
      { nome: "Piazza San Marco", cidade: "Veneza", desc: "Praça principal de Veneza, com a basílica e o campanário.", lat: 45.4343, lng: 12.3388 },
      { nome: "Pompeia", cidade: "Pompeia", desc: "Cidade romana preservada pelas cinzas do Vesúvio em 79 d.C.", lat: 40.7506, lng: 14.4869 },
      { nome: "Torre de Pisa", cidade: "Pisa", desc: "A famosa torre inclinada, na Praça dos Milagres.", lat: 43.723, lng: 10.3966 }
    ],
    comidas: [
      { nome: "Cannoli", cidade: "Palermo", desc: "Massa crocante recheada de ricota doce, típica da Sicília.", lat: 38.1157, lng: 13.3615 },
      { nome: "Carbonara", cidade: "Roma", desc: "Massa com ovo, pecorino e guanciale, sem creme de leite.", lat: 41.9028, lng: 12.4964 },
      { nome: "Bistecca alla fiorentina", cidade: "Florença", desc: "Corte grosso de carne grelhado, servido malpassado.", lat: 43.7696, lng: 11.2558 },
      { nome: "Gelato", cidade: "Florença", desc: "O sorvete artesanal, com sabores de pistache e stracciatella.", lat: 43.7731, lng: 11.2556 },
      { nome: "Pizza napolitana", cidade: "Nápoles", desc: "Massa macia com bordas altas, nascida em Nápoles.", lat: 40.8518, lng: 14.2681 },
      { nome: "Ragù à bolonhesa", cidade: "Bolonha", desc: "Servido com tagliatelle, não com espaguete.", lat: 44.4949, lng: 11.3426 },
      { nome: "Risoto alla milanese", cidade: "Milão", desc: "Risoto de açafrão, acompanha o ossobuco.", lat: 45.4642, lng: 9.19 },
      { nome: "Tiramisù", cidade: "Treviso", desc: "Sobremesa de café, mascarpone e biscoito, criada na região do Vêneto.", lat: 45.6669, lng: 12.243 }
    ],
    paisagens: [
      { nome: "Capri e a Gruta Azul", cidade: "Capri", desc: "Ilha de falésias e água azul no golfo de Nápoles.", lat: 40.5532, lng: 14.2222 },
      { nome: "Cinque Terre", cidade: "Ligúria", desc: "Cinco vilarejos coloridos nas falésias do mar.", lat: 44.1461, lng: 9.6439 },
      { nome: "Costa Amalfitana", cidade: "Amalfi", desc: "Estrada à beira de penhascos com vilas como Positano.", lat: 40.634, lng: 14.6027 },
      { nome: "Dolomitas", cidade: "Trentino-Alto Ádige", desc: "Picos de rocha clara, lagos e trilhas.", lat: 46.4102, lng: 11.844 },
      { nome: "Lago di Como", cidade: "Como", desc: "Lago alpino cercado de montanhas e vilas elegantes.", lat: 45.9936, lng: 9.257 },
      { nome: "Monte Etna", cidade: "Sicília", desc: "Vulcão ativo, um dos mais altos da Europa.", lat: 37.751, lng: 14.9934 },
      { nome: "Val d'Orcia", cidade: "Toscana", desc: "Colinas onduladas, ciprestes e fazendas.", lat: 43.0667, lng: 11.6167 }
    ],
    experiencias: [
      { nome: "Carnaval de Veneza", cidade: "Veneza", desc: "Máscaras e fantasias pelas ruas, em fevereiro.", lat: 45.4371, lng: 12.3326 },
      { nome: "Gôndola", cidade: "Veneza", desc: "Passeio pelos canais menores, de preferência fora do Canal Grande.", lat: 45.4408, lng: 12.3155 },
      { nome: "Ópera na Arena", cidade: "Verona", desc: "Espetáculo ao ar livre num anfiteatro romano, no verão.", lat: 45.439, lng: 10.9946 },
      { nome: "Palio de Siena", cidade: "Siena", desc: "Corrida de cavalos entre bairros, em julho e agosto.", lat: 43.3188, lng: 11.3308 },
      { nome: "Subida ao Vesúvio", cidade: "Nápoles", desc: "Caminhada curta até a cratera.", lat: 40.821, lng: 14.426 },
      { nome: "Vinícolas do Chianti", cidade: "Toscana", desc: "Degustação de vinhos entre Florença e Siena.", lat: 43.5, lng: 11.3 }
    ],
    lojas: [
      { nome: "Campo de' Fiori", cidade: "Roma", desc: "Mercado de rua de manhã, de frutas, flores e temperos.", lat: 41.8956, lng: 12.4722 },
      { nome: "Mercato Centrale", cidade: "Florença", desc: "Mercado coberto com comida regional.", lat: 43.7766, lng: 11.2537 },
      { nome: "Mercado do Rialto", cidade: "Veneza", desc: "Peixes e frutas perto da ponte do Rialto.", lat: 45.4388, lng: 12.3347 },
      { nome: "Porta Portese", cidade: "Roma", desc: "Grande mercado de pulgas aos domingos.", lat: 41.8794, lng: 12.472 },
      { nome: "Via Montenapoleone", cidade: "Milão", desc: "A rua das grandes marcas de moda.", lat: 45.469, lng: 9.1966 }
    ],
    hospedagem: [
      { nome: "Agriturismo na Toscana", cidade: "Toscana", tipo: "pousada", faixa: 2, desc: "Região sugerida: fazendas com quartos e café da manhã.", lat: 43.3, lng: 11.3 },
      { nome: "Apartamentos em Trastevere", cidade: "Roma", tipo: "aluguel", faixa: 2, desc: "Região sugerida: bairro com restaurantes e vida noturna.", lat: 41.8896, lng: 12.47 },
      { nome: "Camping Michelangelo", cidade: "Florença", tipo: "camping", faixa: 1, desc: "Região sugerida: colina com vista da cidade.", lat: 43.7629, lng: 11.265 },
      { nome: "Hostels em Santa Maria Novella", cidade: "Florença", tipo: "hostel", faixa: 1, desc: "Região sugerida: perto da estação de trem.", lat: 43.7745, lng: 11.2487 },
      { nome: "Hostels perto de Termini", cidade: "Roma", tipo: "hostel", faixa: 1, desc: "Região sugerida: perto da estação central.", lat: 41.901, lng: 12.5019 },
      { nome: "Hotel Danieli", cidade: "Veneza", tipo: "hotel", faixa: 3, desc: "Palácio gótico à beira da laguna.", lat: 45.4338, lng: 12.3438 },
      { nome: "Hotel de Russie", cidade: "Roma", tipo: "hotel", faixa: 3, desc: "Hotel de luxo com jardim, perto da Piazza del Popolo.", lat: 41.9097, lng: 12.4776 }
    ],
    rotas: [
      { nome: "Alta Via 1 das Dolomitas", tipo: "Trilha", dur: "10 a 12 dias", dist: "~120 km", desc: "Travessia entre refúgios de montanha, a partir do Lago di Braies.", lat: 46.6942, lng: 12.0856 },
      { nome: "Sentiero Azzurro", tipo: "Trilha", dur: "5 a 6 h", dist: "~12 km", desc: "Caminho entre os vilarejos da Cinque Terre (trechos podem fechar).", lat: 44.1461, lng: 9.6439 },
      { nome: "Sentiero degli Dei", tipo: "Trilha", dur: "3 a 4 h", dist: "~7 km", desc: "Caminho dos Deuses, acima da Costa Amalfitana.", lat: 40.63, lng: 14.542 },
      { nome: "Via Francigena", tipo: "Peregrinação", dur: "vários meses", dist: "~1.900 km", desc: "Rota de peregrinos de Canterbury até Roma.", lat: 41.9022, lng: 12.4539 }
    ],
    transportes: [
      { de: "La Spezia", para: "Cinque Terre", modo: "Trem regional", tempo: "~20 min" },
      { de: "Milão", para: "Veneza", modo: "Trem de alta velocidade", tempo: "~2h30" },
      { de: "Nápoles", para: "Pompeia", modo: "Circumvesuviana", tempo: "~35 min" },
      { de: "Roma", para: "Florença", modo: "Trem de alta velocidade", tempo: "~1h30" },
      { de: "Roma", para: "Nápoles", modo: "Trem de alta velocidade", tempo: "~1h10" }
    ]
  },

  {
    id: "argentina", nome: "Argentina", bandeira: "🇦🇷", centro: [-38.4, -63.6], zoom: 4,
    pontos: [
      { nome: "Caminito", cidade: "Buenos Aires (La Boca)", desc: "Rua de casas coloridas, berço do tango.", lat: -34.6392, lng: -58.3629 },
      { nome: "Casa Rosada", cidade: "Buenos Aires", desc: "Palácio do governo, na Plaza de Mayo.", lat: -34.6083, lng: -58.3712 },
      { nome: "Cataratas do Iguazú (lado argentino)", cidade: "Puerto Iguazú", desc: "Passarelas até a Garganta do Diabo.", lat: -25.6867, lng: -54.444 },
      { nome: "Cemitério da Recoleta", cidade: "Buenos Aires", desc: "Mausoléus monumentais, com o túmulo de Evita Perón.", lat: -34.5875, lng: -58.3933 },
      { nome: "Geleira Perito Moreno", cidade: "El Calafate", desc: "Parede de gelo de 60 m que se move e desaba no lago.", lat: -50.4967, lng: -73.1371 },
      { nome: "Obelisco", cidade: "Buenos Aires", desc: "Símbolo de Buenos Aires, na Avenida 9 de Julio.", lat: -34.6037, lng: -58.3816 },
      { nome: "Quebrada de Humahuaca", cidade: "Jujuy", desc: "Vale andino com vilas de adobe, Patrimônio da Humanidade.", lat: -23.5767, lng: -65.3973 },
      { nome: "Teatro Colón", cidade: "Buenos Aires", desc: "Um dos melhores teatros de ópera do mundo.", lat: -34.601, lng: -58.383 }
    ],
    comidas: [
      { nome: "Alfajor", cidade: "Mar del Plata", desc: "Biscoitos recheados de doce de leite.", lat: -38.0055, lng: -57.5426 },
      { nome: "Asado", cidade: "Buenos Aires", desc: "Churrasco argentino, na grelha, com chimichurri.", lat: -34.6037, lng: -58.3816 },
      { nome: "Choripán", cidade: "Buenos Aires (San Telmo)", desc: "Sanduíche de linguiça com chimichurri.", lat: -34.6213, lng: -58.372 },
      { nome: "Cordeiro patagônico", cidade: "El Calafate", desc: "Cordeiro assado ao fogo, em estilo patagônico.", lat: -50.3402, lng: -72.2648 },
      { nome: "Empanadas salteñas", cidade: "Salta", desc: "Empanadas pequenas, com carne cortada na faca.", lat: -24.7821, lng: -65.4232 },
      { nome: "Locro", cidade: "Salta", desc: "Ensopado de milho, feijão e carnes.", lat: -24.7821, lng: -65.4232 },
      { nome: "Malbec", cidade: "Mendoza", desc: "A uva símbolo da Argentina, com degustação nas vinícolas.", lat: -32.8895, lng: -68.8458 }
    ],
    paisagens: [
      { nome: "Cerro de los Siete Colores", cidade: "Purmamarca", desc: "Montanha em camadas de sete tons.", lat: -23.7433, lng: -65.5 },
      { nome: "Cerro Fitz Roy", cidade: "El Chaltén", desc: "Pico de granito famoso da Patagônia.", lat: -49.2711, lng: -72.9411 },
      { nome: "Lago Nahuel Huapi", cidade: "Bariloche", desc: "Lago glacial cercado de montanhas e florestas.", lat: -41.1335, lng: -71.3103 },
      { nome: "Península Valdés", cidade: "Chubut", desc: "Reserva com baleias-francas, pinguins e lobos-marinhos.", lat: -42.5, lng: -64.0 },
      { nome: "Parque Provincial Aconcágua", cidade: "Mendoza", desc: "Vista do pico mais alto das Américas, com 6.961 m.", lat: -32.6532, lng: -70.0109 },
      { nome: "Ushuaia", cidade: "Terra do Fogo", desc: "A cidade mais ao sul do mundo, entre montanhas e o canal Beagle.", lat: -54.8019, lng: -68.303 }
    ],
    experiencias: [
      { nome: "Caminhada sobre o gelo", cidade: "El Calafate", desc: "Minitrekking com crampons no Perito Moreno.", lat: -50.4967, lng: -73.1371 },
      { nome: "Esqui no Cerro Catedral", cidade: "Bariloche", desc: "Temporada de esqui de junho a setembro.", lat: -41.165, lng: -71.44 },
      { nome: "Jogo no estádio La Bombonera", cidade: "Buenos Aires", desc: "Partida do Boca Juniors, ou visita ao museu.", lat: -34.6356, lng: -58.3647 },
      { nome: "Show de tango", cidade: "Buenos Aires (San Telmo)", desc: "Casas de tango com jantar, ou milongas para dançar.", lat: -34.6217, lng: -58.3719 },
      { nome: "Baleias em Puerto Pirámides", cidade: "Chubut", desc: "Avistamento de baleias-francas de junho a dezembro.", lat: -42.5833, lng: -64.2833 },
      { nome: "Vinícolas de Luján de Cuyo", cidade: "Mendoza", desc: "Degustação e almoço entre vinhedos, com os Andes ao fundo.", lat: -33.0378, lng: -68.8786 }
    ],
    lojas: [
      { nome: "El Ateneo Grand Splendid", cidade: "Buenos Aires", desc: "Livraria dentro de um antigo teatro.", lat: -34.5959, lng: -58.3942 },
      { nome: "Feria de Plaza Francia", cidade: "Buenos Aires (Recoleta)", desc: "Artesanato nos fins de semana.", lat: -34.5882, lng: -58.3918 },
      { nome: "Feria de San Telmo", cidade: "Buenos Aires", desc: "Antiguidades e artesanato aos domingos.", lat: -34.6205, lng: -58.372 },
      { nome: "Galerías Pacífico", cidade: "Buenos Aires", desc: "Shopping em prédio histórico, na Calle Florida.", lat: -34.5993, lng: -58.375 }
    ],
    hospedagem: [
      { nome: "Alvear Palace Hotel", cidade: "Buenos Aires", tipo: "hotel", faixa: 3, desc: "Hotel clássico de luxo na Recoleta.", lat: -34.588, lng: -58.388 },
      { nome: "Apartamentos em Palermo", cidade: "Buenos Aires", tipo: "aluguel", faixa: 2, desc: "Região sugerida: bairro de bares e restaurantes.", lat: -34.588, lng: -58.43 },
      { nome: "Cabañas em Bariloche", cidade: "Bariloche", tipo: "aluguel", faixa: 2, desc: "Região sugerida: casas de madeira perto do lago.", lat: -41.1335, lng: -71.3103 },
      { nome: "Camping em El Chaltén", cidade: "El Chaltén", tipo: "camping", faixa: 1, desc: "Região sugerida: campings perto das trilhas.", lat: -49.33, lng: -72.885 },
      { nome: "Hostels em El Calafate", cidade: "El Calafate", tipo: "hostel", faixa: 1, desc: "Região sugerida: centro, perto da rodoviária.", lat: -50.3402, lng: -72.2648 },
      { nome: "Hostels em San Telmo", cidade: "Buenos Aires", tipo: "hostel", faixa: 1, desc: "Região sugerida: bairro antigo, com feira e tango.", lat: -34.6217, lng: -58.3719 },
      { nome: "Pousadas em Salta", cidade: "Salta", tipo: "pousada", faixa: 2, desc: "Região sugerida: casarões coloniais no centro.", lat: -24.7821, lng: -65.4232 }
    ],
    rotas: [
      { nome: "Circuito Chico", tipo: "Rota panorâmica", dur: "1 dia", dist: "~60 km", desc: "Roteiro de carro ou bicicleta pelos lagos de Bariloche.", lat: -41.1335, lng: -71.3103 },
      { nome: "Laguna de los Tres", tipo: "Trilha", dur: "8 a 10 h", dist: "~20 km (ida e volta)", desc: "Trilha com vista para o Fitz Roy, a partir de El Chaltén.", lat: -49.3314, lng: -72.886 },
      { nome: "Ruta de los Siete Lagos", tipo: "Rota panorâmica", dur: "1 dia", dist: "~107 km", desc: "Estrada entre Villa La Angostura e San Martín de los Andes.", lat: -40.762, lng: -71.646 }
    ],
    transportes: [
      { de: "Buenos Aires", para: "Bariloche", modo: "Avião", tempo: "~2h" },
      { de: "Buenos Aires", para: "El Calafate", modo: "Avião", tempo: "~3h" },
      { de: "Buenos Aires", para: "Iguazú", modo: "Avião", tempo: "~1h50" },
      { de: "Buenos Aires", para: "Mendoza", modo: "Avião", tempo: "~1h50" },
      { de: "El Calafate", para: "El Chaltén", modo: "Ônibus", tempo: "~3h" },
      { de: "El Calafate", para: "Perito Moreno", modo: "Ônibus ou carro", tempo: "~1h30" }
    ]
  },

  {
    id: "peru", nome: "Peru", bandeira: "🇵🇪", centro: [-9.2, -75.0], zoom: 5,
    pontos: [
      { nome: "Centro Histórico de Lima", cidade: "Lima", desc: "Plaza Mayor, catedral e casarões coloniais com varandas de madeira.", lat: -12.0464, lng: -77.03 },
      { nome: "Chan Chan", cidade: "Trujillo", desc: "Maior cidade de adobe da América pré-colombiana.", lat: -8.1058, lng: -79.0742 },
      { nome: "Huaca Pucllana", cidade: "Lima (Miraflores)", desc: "Pirâmide de adobe de 1.500 anos no meio da cidade.", lat: -12.11, lng: -77.0336 },
      { nome: "Linhas de Nazca", cidade: "Nazca", desc: "Desenhos gigantes no deserto, vistos de avião.", lat: -14.739, lng: -75.13 },
      { nome: "Machu Picchu", cidade: "Aguas Calientes", desc: "Cidadela inca do século XV, entre montanhas.", lat: -13.1631, lng: -72.545 },
      { nome: "Ollantaytambo", cidade: "Vale Sagrado", desc: "Fortaleza inca com vila de ruas originais.", lat: -13.2583, lng: -72.2644 },
      { nome: "Plaza de Armas", cidade: "Cusco", desc: "Praça central da antiga capital inca.", lat: -13.5164, lng: -71.9785 },
      { nome: "Sacsayhuamán", cidade: "Cusco", desc: "Fortaleza de pedras gigantes encaixadas, acima de Cusco.", lat: -13.5086, lng: -71.9817 }
    ],
    comidas: [
      { nome: "Anticuchos", cidade: "Lima", desc: "Espetinhos de coração bovino, marinados e grelhados.", lat: -12.1219, lng: -77.0297 },
      { nome: "Ají de gallina", cidade: "Lima", desc: "Frango desfiado em creme de pimenta amarela.", lat: -12.0464, lng: -77.0428 },
      { nome: "Causa limeña", cidade: "Lima", desc: "Camadas de batata amarela com recheio de frango ou atum.", lat: -12.0464, lng: -77.0428 },
      { nome: "Ceviche", cidade: "Lima", desc: "Peixe cru no limão, com cebola roxa e milho.", lat: -12.1219, lng: -77.0297 },
      { nome: "Cuy al horno", cidade: "Cusco", desc: "Porquinho-da-índia assado, prato andino tradicional.", lat: -13.5164, lng: -71.9785 },
      { nome: "Lomo saltado", cidade: "Lima", desc: "Carne salteada com cebola, tomate e batata frita.", lat: -12.0464, lng: -77.0428 },
      { nome: "Pisco sour", cidade: "Lima", desc: "Coquetel de pisco, limão e clara de ovo.", lat: -12.0464, lng: -77.0428 },
      { nome: "Rocoto relleno", cidade: "Arequipa", desc: "Pimenta recheada com carne e queijo.", lat: -16.3989, lng: -71.535 }
    ],
    paisagens: [
      { nome: "Cañón del Colca", cidade: "Arequipa", desc: "Um dos cânions mais profundos do mundo.", lat: -15.6381, lng: -71.6003 },
      { nome: "Huacachina", cidade: "Ica", desc: "Oásis cercado de dunas gigantes.", lat: -14.0875, lng: -75.7626 },
      { nome: "Lago Titicaca", cidade: "Puno", desc: "O lago navegável mais alto do mundo, a 3.800 m.", lat: -15.8402, lng: -70.0219 },
      { nome: "Laguna 69", cidade: "Huaraz", desc: "Lago turquesa a 4.600 m, na Cordilheira Branca.", lat: -9.0, lng: -77.6 },
      { nome: "Montanha Colorida (Vinicunca)", cidade: "Cusco", desc: "Montanha de listras vermelhas e amarelas, a 5.000 m.", lat: -13.87, lng: -71.303 },
      { nome: "Tambopata", cidade: "Puerto Maldonado", desc: "Floresta amazônica, com araras e lagos.", lat: -12.5933, lng: -69.1891 },
      { nome: "Vale Sagrado", cidade: "Urubamba", desc: "Vale verde com ruínas incas e vilas de artesãos.", lat: -13.305, lng: -72.1167 }
    ],
    experiencias: [
      { nome: "Aula de culinária peruana", cidade: "Lima", desc: "Visita ao mercado e preparo de ceviche e pisco sour.", lat: -12.1119, lng: -77.0187 },
      { nome: "Cruz del Cóndor", cidade: "Cañón del Colca", desc: "Mirante para ver condores ao amanhecer.", lat: -15.608, lng: -71.892 },
      { nome: "Ilhas flutuantes dos Uros", cidade: "Puno", desc: "Ilhas feitas de junco no lago Titicaca.", lat: -15.82, lng: -69.97 },
      { nome: "Inti Raymi", cidade: "Cusco", desc: "Festa do Sol inca, em 24 de junho.", lat: -13.5086, lng: -71.9817 },
      { nome: "Sandboarding", cidade: "Huacachina", desc: "Prancha nas dunas e passeio de buggy.", lat: -14.0875, lng: -75.7626 },
      { nome: "Trem para Machu Picchu", cidade: "Ollantaytambo", desc: "Viagem de trem panorâmico até Aguas Calientes.", lat: -13.2583, lng: -72.2644 },
      { nome: "Voo sobre Nazca", cidade: "Nazca", desc: "Sobrevoo curto sobre os geoglifos.", lat: -14.8, lng: -74.95 }
    ],
    lojas: [
      { nome: "Feira de Pisac", cidade: "Pisac", desc: "Feira de artesanato no Vale Sagrado, mais ativa aos domingos.", lat: -13.4201, lng: -71.8469 },
      { nome: "Larcomar", cidade: "Lima (Miraflores)", desc: "Shopping em penhasco, com vista para o oceano.", lat: -12.1318, lng: -77.0295 },
      { nome: "Mercado de San Pedro", cidade: "Cusco", desc: "Frutas, queijos, sucos e artesanato.", lat: -13.5183, lng: -71.9808 },
      { nome: "Mercado de Surquillo", cidade: "Lima", desc: "Mercado de produtos locais, peixes e frutas.", lat: -12.1119, lng: -77.0187 }
    ],
    hospedagem: [
      { nome: "Apartamentos em Miraflores", cidade: "Lima", tipo: "aluguel", faixa: 2, desc: "Região sugerida: bairro seguro e turístico, perto do mar.", lat: -12.1219, lng: -77.0297 },
      { nome: "Hotéis no centro de Arequipa", cidade: "Arequipa", tipo: "hotel", faixa: 2, desc: "Região sugerida: perto da Plaza de Armas.", lat: -16.3989, lng: -71.535 },
      { nome: "Hostels em San Blas", cidade: "Cusco", tipo: "hostel", faixa: 1, desc: "Região sugerida: bairro de artesãos, perto do centro.", lat: -13.5155, lng: -71.9722 },
      { nome: "Hostels em Miraflores", cidade: "Lima", tipo: "hostel", faixa: 1, desc: "Região sugerida: perto de praias e restaurantes.", lat: -12.1219, lng: -77.0297 },
      { nome: "Pousadas em Aguas Calientes", cidade: "Aguas Calientes", tipo: "pousada", faixa: 2, desc: "Região sugerida: base para a subida a Machu Picchu.", lat: -13.1547, lng: -72.5256 },
      { nome: "Camping no Vale Sagrado", cidade: "Urubamba", tipo: "camping", faixa: 1, desc: "Região sugerida: campings entre Urubamba e Ollantaytambo.", lat: -13.305, lng: -72.1167 },
      { nome: "Belmond Hotel Monasterio", cidade: "Cusco", tipo: "hotel", faixa: 3, desc: "Antigo mosteiro do século XVI.", lat: -13.5165, lng: -71.9759 }
    ],
    rotas: [
      { nome: "Choquequirao", tipo: "Trilha", dur: "4 dias", dist: "~60 km", desc: "Cidadela inca isolada, a partir de Cachora.", lat: -13.538, lng: -72.84 },
      { nome: "Trilha Inca clássica", tipo: "Trilha", dur: "4 dias", dist: "~43 km", desc: "Caminho até Machu Picchu; exige licença com meses de antecedência.", lat: -13.2583, lng: -72.2644 },
      { nome: "Trilha Salkantay", tipo: "Trilha", dur: "4 a 5 dias", dist: "~60 km", desc: "Alternativa à Trilha Inca, com a passagem a 4.600 m.", lat: -13.5183, lng: -72.5469 },
      { nome: "Vinicunca", tipo: "Trilha", dur: "2 a 3 h de subida", dist: "~5 km", desc: "Caminhada até a Montanha Colorida, a mais de 5.000 m.", lat: -13.87, lng: -71.303 }
    ],
    transportes: [
      { de: "Arequipa", para: "Chivay (Colca)", modo: "Ônibus", tempo: "~3h30" },
      { de: "Cusco", para: "Ollantaytambo", modo: "Van", tempo: "~1h45" },
      { de: "Cusco", para: "Puno", modo: "Ônibus", tempo: "~7h" },
      { de: "Lima", para: "Cusco", modo: "Avião", tempo: "~1h30" },
      { de: "Lima", para: "Ica", modo: "Ônibus", tempo: "~4h30" },
      { de: "Ollantaytambo", para: "Aguas Calientes", modo: "Trem", tempo: "~1h40" }
    ]
  }
];
