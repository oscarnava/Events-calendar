# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_users = [
  { name: 'tester', email: 'tester@test.com' }
]

test_events = [
  {
    title: 'Los mandamientos de una mujer chingona',
    description: 'Adela Micha, Susana Zabaleta y Rebecca de Alba, se reúnen por primera vez en un escenario '\
                 'para impartir una serie de conferencias bajo el nombre de “Los Mandamientos de una Mujer '\
                 'Chingona”, cuya gira inició por Estados Unidos en abril pasado con gran éxito.',
    begins: DateTime.new(2019, 12, 9, 19),
    ends: DateTime.new(2019, 12, 9, 19),
    category: 'Teatro'
  }, {
    title: 'Los mandamientos de una mujer chingona',
    description: 'Adela Micha, Susana Zabaleta y Rebecca de Alba, se reúnen por primera vez en un escenario '\
                 'para impartir una serie de conferencias bajo el nombre de “Los Mandamientos de una Mujer '\
                 'Chingona”, cuya gira inició por Estados Unidos en abril pasado con gran éxito.',
    begins: DateTime.new(2019, 12, 9, 21),
    ends: DateTime.new(2019, 12, 9, 21),
    category: 'Teatro'
  }, {
    title: '15 Bienal del Cartel en México, en el Centro Cultural Clavijero',
    description: 'La exposición de la Bienal Internacional del Cartel en México sigue su camino y su próxima '\
                 'parada es el Centro Cultural Clavijero de Morelia, Michoacán.',
    begins: DateTime.new(2019, 12, 12, 10),
    ends: DateTime.new(2019, 2, 23, 18),
    category: 'Exposición'
  }, {
    title: 'XX Feria de la Esfera en Tlalpujahua Michoacán 2019',
    description: 'El Ayuntamiento de Tlalpujahua junto con los artesanos de esta bella comunidad te invitan '\
                 'a la «XX Feria de la Esfera» la cual inicia este 28 de septiembre y culminará el 15 de '\
                 'diciembre de 2019.',
    begins: DateTime.new(2019, 9, 28),
    ends: DateTime.new(2019, 12, 15),
    category: 'Ferias y festivales'
  }, {
    title: 'Tributo a David Bowie',
    description: 'El Tributo a David Bowie por Alfonso André y sus amigos, inició el 28 de abril del 2018, '\
                 'gracias a la exposición montañés en el Foto Museo de Cuatro Caminos, exhibiendo la exposición '\
                 'del famoso fotógrafo Mick Rock. El show está lleno de talento, compuesto por varios cantantes '\
                 'de renombre nacional e internacional.',
    begins: DateTime.new(2019, 12, 13, 21),
    ends: DateTime.new(2019, 12, 13, 21),
    category: 'Conciertos'
  }, {
    title: 'Encendido de la Catedral de Morelia',
    description: 'Un espectáculo de luces, sonido e iluminación, acompañado de fuegos artificiales, que realzan '\
                 'la belleza de nuestra majestuosa Catedral, símbolo y orgullo de Morelia. Un espectáculo que dura '\
                 'alrededor de 15 minutos, con un inicio lleno de suspenso, totalmente obscuro y poco a poco al '\
                 'compás de la música y las luces, va apareciendo nuestra maravillosa Catedral. Acompañada fuegos '\
                 'pirotécnicos que iluminan el cielo.',
    begins: DateTime.new(2019, 12, 14, 20, 45),
    ends: DateTime.new(2019, 12, 14, 20, 45),
    category: 'Espectáculos'
  }, {
    title: 'Espectáculo de video mapping en la Plaza Valladolid',
    description: 'Comenzaremos con una nueva temporada del increíble espectáculo de video mapping, en la que podrás '\
                 'sorprenderte con proyecciones de las riquezas naturales, arquitectónicas y culturales que tenemos '\
                 'en nuestra hermosa ciudad.',
    begins: DateTime.new(2019, 12, 14, 21),
    ends: DateTime.new(2019, 12, 14, 21),
    category: 'Espectáculos'
  }, {
    title: '¡Haz Barrio! Compra local.',
    description: "¿Te acuerdas de haz barrio? El Ayuntamiento de Morelia te invita al relanzamiento del programa.\n"\
                 'La aplicación de Haz Barrio, será el eje para que las empresas y comercios puedan proyectarse de '\
                 'forma gratuita, incrementar sus ventas y aumentar su rango de potenciales clientes”, refirieron '\
                 'durante la presentación de la nueva iteración de la campaña. Esta app servirá, además para que los '\
                 'comercios den a conocer ofertas y promociones especiales, además de que recopilará la información de '\
                 'gusto y tendencias de compra de los usuarios, para presentar recomendaciones a los usuarios y adaptarse '\
                 'al mercado mismo.',
    begins: DateTime.new(2019, 12, 10, 17),
    ends: DateTime.new(2019, 12, 10, 17),
    category: 'Ferias y festivales'
  }, {
    title: 'OLINKA: la ciudad ideal del Dr. Atl',
    description: 'Cuauhtémoc Medina, en su libro Olinka, la ciudad ideal del Dr. Atl (El Colegio Nacional, 2019), '\
                 'indaga en la personalidad contradictoria de este multiusos artístico y rastrea la larga y '\
                 'retorcida evolución del proyecto de ciudad ideal del paisajista, vulcanólogo, filósofo, novelista '\
                 "y seductor mexicano.\n"\
                 'Exponente: Cuahutémoc Medina, curador del Museo de Arte contemporáneo MUAC - UNAM',
    begins: DateTime.new(2019, 12, 19, 17),
    ends: DateTime.new(2019, 12, 19, 17),
    category: 'Conferencias'
  }, {
    title: '«ET IN TERRA PAX»',
    description: 'Coral de las Rosas. Conservatorio de las Rosas, 16a temporada de conciertos. Todos los jueves, '\
                 'sala Niños Cantores, Entrada libre',
    begins: DateTime.new(2019, 12, 12, 19),
    ends: DateTime.new(2019, 12, 12, 19),
    category: 'Conciertos'
  }, {
    title: 'Los versos del Alacrán',
    description: 'Se trata de Juan Álzate y Neftalí Coria, quienes han diseñado este recital de poesía y saxofón '\
                 'que busca ensamblar y coincidir en la sonoridad poética como una sola cosa, entre el mundo sonoro '\
                 'de las palabras y el aliento intenso del saxofón que en el jazz ha encontrado la libertad de la '\
                 "improvisación.\n"\
                 'Los poemas de Neftalí Coria y la música de Juan Álzate, se reúnen en un encuentro creativo que '\
                 "explora, con sus añejos oficios, una nueva poética.\n"\
                 'Diálogo saxofónico poético, con Jua Alzate y Neftalí Coria. Centro Cultural Clavijero, Biblioteca '\
                 'Bosch Vargaslugo. Cooperación: $100.°°',
    begins: DateTime.new(2019, 12, 12, 19),
    ends: DateTime.new(2019, 12, 12, 19),
    category: 'Conciertos'
  }, {
    title: 'Los versos del Alacrán',
    description: 'Se trata de Juan Álzate y Neftalí Coria, quienes han diseñado este recital de poesía y saxofón '\
                 'que busca ensamblar y coincidir en la sonoridad poética como una sola cosa, entre el mundo sonoro '\
                 'de las palabras y el aliento intenso del saxofón que en el jazz ha encontrado la libertad de la '\
                 "improvisación.\n"\
                 'Los poemas de Neftalí Coria y la música de Juan Álzate, se reúnen en un encuentro creativo que '\
                 "explora, con sus añejos oficios, una nueva poética.\n"\
                 'Diálogo saxofónico poético, con Jua Alzate y Neftalí Coria. Centro Cultural Clavijero, Biblioteca '\
                 'Bosch Vargaslugo. Cooperación: $100.°°',
    begins: DateTime.new(2019, 12, 19, 19),
    ends: DateTime.new(2019, 12, 19, 19),
    category: 'Conciertos'
  }
]

def create_user(data)
  user = User.create(data)
  warn user.errors unless user.valid?
end

def create_event(data)
  event = Event.create(data)
  warn event.errors unless event.valid?
end

User.delete_all
Event.delete_all

test_users.each { |data| create_user(data) }
test_events.each { |data| create_event(data) }

warn 'Database initialized'
