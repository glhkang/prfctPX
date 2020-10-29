# json.photos do
#     json.set! @photo.id do
#         json.partial! 'api/photos/photo', photo: @photo
#     end
# end

json.partial! "api/photos/photo", photo: @photo
json.photoUrl @photo.photo.map { |file| url_for(file) } 




