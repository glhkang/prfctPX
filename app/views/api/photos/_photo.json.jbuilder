json.extract! photo, :id, :title, :description, :category, :location, :photographer_id, :archived, :created_at, :updated_at

json.email photo.photographer.email
json.username photo.photographer.username