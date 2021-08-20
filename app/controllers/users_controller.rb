class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
  
    # POST /users (users#create)
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    # GET /users/:id (users#show)
    def show
      render json: @current_user
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
  
  end