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
      if session[:user_id]
        user = User.find(session[:user_id])
        user_json = UserSerializer.new(user).serializable_hash
        render json: {user: user_json}, status: :ok
      end
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
  
  end