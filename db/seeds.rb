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
Post.create!(
  title: 'Straight Sending',
  description: 'Getting gnarly on the north shore',
  image_url: 'https://berkshireeast.com/sites/default/files/styles/max_2600x2600/public/2019-10/MtnBikeLesson3_1.jpg?itok=WcYKojgj',
  user: @cam,
  category: @mtb
)
Post.create!(
  title: 'Sunset Hike',
  description: 'Went on a beautiful sunset hike with friends today. It was magical',
  image_url: 'https://media.istockphoto.com/photos/group-of-hikers-walks-in-mountains-at-sunset-picture-id1189969126?k=20&m=1189969126&s=612x612&w=0&h=6JPjSS9UORT-DAnIoa0mopA9lwFxX8tX8HQrJdb_i70=',
  user: @shaz,
  category: @hiking
)
Post.create!(
  title: 'Brrrrr Baby',
  description: 'Now, now. Perfectly symmetrical violence never solved anything.',
  image_url: 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/tWy2ZygcJnC6-t_i3M_VAwXk69w=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/V2RAQC7W6NDODKOG4RNMSUA34I.JPG',
  user: @evan,
  category: @miscellaneous
)
Post.create!(
  title: 'Don\'t. Be. Scared',
  description: 'Love the feeling of the altitude up here',
  image_url: 'https://img.redbull.com/images/c_crop,w_5122,h_3415,x_0,y_2529,f_auto,q_auto/c_scale,w_1500/redbullcom/2019/06/03/83ddcec2-b607-4def-a965-abb0b94fa412/how-to-take-indoor-climbing-outdoors',
  user: @nash,
  category: @climbing
)
Post.create!(
  title: 'Running into the sunset like.',
  description: 'Now, now. Perfectly symmetrical violence never solved anything.',
  image_url: 'http://media.monsterindia.com/cmsimages/1509963788.jpg',
  user: @cam,
  category: @running
)
Post.create!(
  title: 'Float Trip',
  description: 'Being on the water soothes the soul.',
  image_url: 'https://media.istockphoto.com/photos/woman-kayaking-in-fjord-in-norway-picture-id1059380230?k=20&m=1059380230&s=612x612&w=0&h=4uX7UZ05gPYZgq-TPqOEU_CP2MUzYn2rKO2448ihdjg=',
  user: @nash,
  category: @miscellaneous
)
Post.create!(
  title: 'Took my first fall',
  description: 'Now, now. Perfectly symmetrical violence never solved anything.',
  image_url: 'http://voyageurtripper.com/wp-content/uploads/2019/04/Voyageur-Tripper-Dane-Jackson-Kayak-2.png',
  user: @nash,
  category: @miscellaneous
)


puts "#{Post.count} posts created."
