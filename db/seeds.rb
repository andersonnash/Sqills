# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
Category.destroy_all
User.destroy_all

@nash =
  User.create!(
    username: 'Nash',
    email: 'nash@nash.com',
    password: '123456'
  )
@cam =
  User.create!(
    username: 'Cam',
    email: 'cam@cam.com',
    password: '123456'
  )
@shaz =
  User.create!(
    username: 'Shaz',
    email: 'shaz@shaz.com',
    password: '123456'
  )
@evan =
  User.create!(
    username: 'Evan',
    email: 'evan@evan.com',
    password: '123456'
  )

puts "#{User.count} users created."

@cycling = Category.create!(name: 'cycling')
@hiking = Category.create!(name: 'hiking')
@mtb = Category.create!(name: 'mtb')
@running = Category.create!(name: 'running')
@swimming = Category.create!(name: 'swimming')
@climbing = Category.create!(name: 'climbing')
@miscellaneous = Category.create!(name: 'miscellaneous')

puts "#{Category.count} categories created."

# @format = [@hiking, @cycling, @mtb, @running, @swimming, @climbing]



Post.create!(
  title: 'Hiking with the homies',
  description: 'I\'m baby chartreuse squid hoodie four dollar toast wayfarers gochujang. Yuccie prism everyday carry franzen,
  pinterest fam poutine locavore sriracha iceland kitsch salvia portland snackwave.',
  image_url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGlraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  user: @shaz,
  category: @hiking
)

Post.create!(
  title: 'Climbing in Yosemite',
  description: 'Hammock bicycle rights hexagon food truck messenger bag occupy chicharrones lyft 3 wolf moon shabby chic migas fashion axe listicle prism.',
  image_url: 'https://www.nps.gov/yose/planyourvisit/images/climber-on-el-cap-main-page-web.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
  user: @nash,
  category: @climbing
)
Post.create!(
  title: 'Pool Time',
  description: 'Ennui schlitz etsy, gochujang trust fund biodiesel fixie freegan tousled bushwick polaroid deep v.',
  image_url: 'https://images.immediate.co.uk/production/volatile/sites/34/2020/07/How-to-train-and-prepare-for-your-first-Ironman-swim-7f5185d.jpg?quality=90&resize=768,574',
  user: @cam,
  category: @swimming
)
Post.create!(
  title: 'Get Yer Run On',
  description: 'Now, now. Perfectly symmetrical violence never solved anything.',
  image_url: 'http://tri247.kinsta.cloud/wp-content/uploads/2016/12/andrew-greenleaf-ironman-703-run-700x394.jpg',
  user: @evan,
  category: @running
)

puts "#{Post.count} posts created."
