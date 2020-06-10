class Api::PhotosController < ApplicationController
  
  #fix up index below...
  # def index
  #   if params[:filters]
  #     limit = params[:filters][:limit]
  #     offset = params[:filters][:offset]
  #     @photos = []
      
  #     if logged_in?
  #       #following logic
  #       following_ids = current_user.following.pluck(:id)
  #       following_ids.push(current_user.id)
  #       @photos = Photo.all.limit(limit).offset(offset)
  #         .where.not(author_id: following_ids)
  #         .order(updated_at: :desc)
  #     else 
  #       @photos = Photo.all.limit(limit).offset(offset)
  #         .order(updated_at: :desc)
  #     end

  #     @has_more = @photos.length == limit.to_i
  #     render :filtered_photos
  #   else
  #     @users = logged_in? ?
  #       #add logic below for followers 
  #       current_user.following.includes(:photos) : []
  #     render :index
  #   end
  # end

  # def create
  #   @photo = Photo.new(photo_params)

  #   if @photo.save
  #     render :show
  #   else
  #     render json: @photo.errors.full_messages, status: 422
  #   end
  # end

  def show
    @photo = Photo.find(params[:id])
    render :show
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
  # end

  # private
  # def photo_params
  #   params.require(:photo).permit(:title, :description, :category, :location, :photographer_id, :photo_file)
  # end
end
