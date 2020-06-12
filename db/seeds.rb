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

photo1 = Photo.create!(title: 'selfie...myface', description: 'new age selfie.. of my face', category: 1, photographer_id: user1.id)