# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Photo.destroy_all

user1 = User.create!(email: 'tester@gmail.com', password:'testertest', username: 'tester')
user2 = User.create!(email: 'gloria@gmail.com', password:'gloriaspassword', username: 'gloria')
user3 = User.create!(email: 'andywarhol@iCloud.com', password:'andyandyandy', username: 'andywarhol')
##
user4 = User.create!(email: 'aleibovitz@gmail.com', password:'portraits4eva', username: 'annieleibovitz')
user5 = User.create!(email: 'davidlachapelle@hotmail.com', password:'kitchsysurrealist', username: 'davidlachapelle')

photo1 = Photo.create!(title: 'selfie...myface', description: 'new age selfie.. of my face', category: 22, photographer_id: user1.id)
file = open('app/assets/images/homefeed/selfie.png')
photo1.photo.attach(io: file, filename: 'selfie.png')
photo1.save!

photo2 = Photo.create!(title: 'poppin g-wagon', description: 'custom orange g-wagon amg', category: 27, photographer_id: user2.id)
# photo2 = Photo.create!(title: 'poppin g-wagon', description: 'custom orange g-wagon amg', category: 27, photographer_id: 6)
file = open('app/assets/images/homefeed/gwagon.png')
photo2.photo.attach(io: file, filename: 'gwagon.png')
photo2.save!

photo3 = Photo.create!(title: 'rollin hills', description: 'beautful shot of rolling hills', category: 19, photographer_id: user2.id)
# photo3 = Photo.create!(title: 'rollin hills', description: 'beautful shot of rolling hills', category: 19, photographer_id: 6)
file = open('app/assets/images/homefeed/rollinhills.png')
photo3.photo.attach(io: file, filename: 'rollinhills.png')
photo3.save!

photo4 = Photo.create!(title: 'bleu', description: 'gorgeous bleu interior', category: 8, photographer_id: user3.id)
# photo4 = Photo.create!(title: 'bleu', description: 'gorgeous bleu interior', category: 8, photographer_id: 7)
file = open('app/assets/images/homefeed/bleuinterior.png')
photo4.photo.attach(io: file, filename: 'bleuinterior.png')
photo4.save!

photo5 = Photo.create!(title: 'electric hands', description: 'hands with some pink pop', category: 8, photographer_id: user5.id)
#photo5 = Photo.create!(title: 'electric hands', description: 'hands with some pink pop', category: 8, photographer_id: 9)
file = open('app/assets/images/homefeed/electrichands.png')
photo5.photo.attach(io: file, filename: 'electrichands.png')
photo5.save!
