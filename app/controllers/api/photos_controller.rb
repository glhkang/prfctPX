class Api::PhotosController < ApplicationController
#  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @photos = Photo.all
    render 'api/photos/index'
  end
  
  def show
    # @photo = Photo.with_attached_photos.find(params[:id])
    @photo = Photo.find_by(id: params[:id])
    # if @photo.save && @photo.photographer_id == current_user.id
    #   render :show
    # else
    #   render json: @photo.errors.full_messages, status: 422
    # end
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
    #debugger
    @photo = Photo.find_by(id: params[:id])
    if @photo.photographer_id == current_user && @photo && @photo.update(photo_params)
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])
    if @photo.photographer_id == current_user.id
      @photo.destroy
      render 'api/photos/show'
    end
  end

  # def show
  #   @photo = Photo.includes(:photographer).find_by_id(params[:id])

  #   if @photo
  #     if (logged_in? && current_user.id != @photo.photographer_id) || !logged_in?
  #       #counting views? if so, add logic here
  #       @photo.save
  #     end
  #     render :show

  #   else
  #     render json: ['Photo does not exist'], status: 404
  #   end
  #commented out code
  # end

  private
  def photo_params
    params.require(:photo).permit(:title, :category, :photographer_id, photo: [])
  end
end

