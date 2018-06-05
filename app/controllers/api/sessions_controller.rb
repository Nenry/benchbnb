class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid params"], status: 422
      render :show
    end
  end



  def destroy

    if @user
      logout
      render json: {}
    else
      render json: ["Nobody is logged in to log out"], status: 404
    end
  end


end
