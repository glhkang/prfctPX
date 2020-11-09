class Api::LikesController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @likes = Like.all
  end

  def show
    @like = Like.find_By(id: params[:id])
  end

  def create
    if params[:user_id].to_i == current_user.id
      @like = Like.new
      @like.user_id = current_user.id
      @like.photo_id = params[:photo_id].to_i

      if @like.save
        render 'api/likes/show'
      else
        render json: @like.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    @like.destroy
    render 'api/likes/show'
  end


  private
  def like_params
    params.require(:like).permit(:id, :user_id, :photo_id)
  end
end