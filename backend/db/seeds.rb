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
    ends: DateTime.new(2019, 12, 9, 23),
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
    ends: DateTime.new(2019, 12, 13, 23),
    category: 'Conciertos'
  }, {
    title: 'Encendido de la Catedral de Morelia',
    description: 'Un espectáculo de luces, sonido e iluminación, acompañado de fuegos artificiales, que realzan '\
                 'la belleza de nuestra majestuosa Catedral, símbolo y orgullo de Morelia. Un espectáculo que dura '\
                 'alrededor de 15 minutos, con un inicio lleno de suspenso, totalmente obscuro y poco a poco al '\
                 'compás de la música y las luces, va apareciendo nuestra maravillosa Catedral. Acompañada fuegos '\
                 'pirotécnicos que iluminan el cielo.',
    begins: DateTime.new(2019, 12, 14, 20, 45),
    ends: DateTime.new(2019, 12, 14, 21, 0),
    category: 'Espectáculos'
  }, {
    title: 'Espectáculo de video mapping en la Plaza Valladolid',
    description: 'Comenzaremos con una nueva temporada del increíble espectáculo de video mapping, en la que podrás '\
                 'sorprenderte con proyecciones de las riquezas naturales, arquitectónicas y culturales que tenemos '\
                 'en nuestra hermosa ciudad.',
    begins: DateTime.new(2019, 12, 14, 21, 30),
    ends: DateTime.new(2019, 12, 14, 22, 0),
    category: 'Espectáculos'
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
