json.photos do
    json.set! @photo.id do
        json.partial! 'api/photos/photo', photo: @photo
    end
end