json.partial! "api/photos/photo", photo: @photo
json.photoUrl @photo.photo.map { |file| url_for(file) } 




