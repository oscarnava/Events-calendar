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
    description: 'Adela Micha, Susana Zabaleta y Rebecca de Alba, se reúnen por primera vez en un escenario'\
                ' para impartir una serie de conferencias bajo el nombre de “Los Mandamientos de una Mujer'\
                ' Chingona”, cuya gira inició por Estados Unidos en abril pasado con gran éxito.',
    begins: '2019/12/9 19:00',
    ends: '2019/12/9 23:00',
    category: 'Exposición'
  }, {
    title: '15 Bienal del Cartel en México, en el Centro Cultural Clavijero',
    description: 'La exposición de la Bienal Internacional del Cartel en México sigue su camino y su próxima'\
                 ' parada es el Centro Cultural Clavijero de Morelia, Michoacán.',
    begins: '2019/12/12 10:00',
    ends: '2019/02/23 18:00',
    category: 'Teatro'
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
