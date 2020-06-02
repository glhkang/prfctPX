class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user], [:username],
      params[:user], [:password]
    )

    #make sure these renders are correct
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username and or password."], status: 401
    end
  end

  #update error message below.
  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["No one to log out..."], status: 404
    end
  end

end