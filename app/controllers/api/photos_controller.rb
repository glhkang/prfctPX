class Api::PhotosController < ApplicationController
before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @photos = Photo.all
    render 'api/photos/index'
  end
  
  def show
    @photo = Photo.find_by(id: params[:id])

  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
        render 'api/photos/show'
      else
        render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])
    #render json: params
    if @photo.update(photo_params)
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])

    if @photo.photographer_id
      @photo.destroy
      render json: { id: params[:id] }
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:id,  :title, :description, :category, :location, :photographer_id, :archived, photo: [])
  end

end

