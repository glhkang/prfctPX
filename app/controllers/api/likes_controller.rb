class Api::LikesController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @likes = Like.all
  end

  def show
    @like = Like.find_By(id: params[:id])
  end

  def create
      @like = Like.new
      @like.user = current_user
      @like.photo_id = params[:photo_id].to_i
        if @like.save
          render 'api/likes/show'
        else
          render json: @likes.errors.full_messages, status: 422
        end
    
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    
    if @like.destroy
      #render 'api/likes/show'
      render json: { id: params[:id] }
    end
  end

  
  private

  def like_params
    params.require(:like).permit(:id, :user_id, :photo_id)
  end

end