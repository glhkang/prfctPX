class Api::FollowsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @follows = Follow.all
  end

  def show
    @follow = Follow.find_by(id: params[:id])
  end

  def create
    if params[:user_id].to_i == current_user.id
      @follow = Follow.new
      @follow.user_id = current_user.id
      @follow.follower_id = params[:user_id].to_i

      if @follow.save
        render 'api/follows/show'
      else
        render json: @follow.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])
    @follow.destroy
    render 'api/follows/show'
  end


  private
  def follow_params
    params.require(:follow).permit(:id, :user_id, :follower_id)
  end
end