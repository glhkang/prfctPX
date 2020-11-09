class Api::PhotosController < ApplicationController
#  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @photos = Photo.all
    render 'api/photos/index'
  end
  
  def show
    @photo = Photo.find_by(id: params[:id])
    # if @photo.save && @photo.photographer_id == current_user.id
    #   render :show
    # else
    #   render json: @photo.errors.full_messages, status: 422
    # end
  end

  def create
    @photo = Photo.new(photo_params)
    # if @photo.photographer_id == current_user.id && @photo.save
    if @photo.save
        render 'api/photos/show'
      else
        render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])
    #render json: params
    # if @photo.photographer_id == current_user.id && @photo && @photo.update(photo_params)

    if @photo.update(photo_params)
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])
    # if @photo.photographer_id == current_user.id

    if @photo.photographer_id
      @photo.destroy
      render 'api/photos/show'
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:id, :title, :description, :category, :location, :photographer_id, photo: [])
  end

end

