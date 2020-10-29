@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :description, :category, :location, :photographer_id, :archived, :created_at, :updated_at
    
    photo.photo.each do |photo|
       json.photoUrl url_for(photo)
    end

  end
end