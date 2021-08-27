class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    # skip_before_action :authorize, only: [:create, :show, :index]

    def index
      # if session[:user_id]
      users = User.all
      render json: users, status: :ok
      # render json: users, include: [:workouts], status: :ok
      # end
    end

    # POST /users (users#create)
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
      # render json: {users: user, workouts: user.workouts}, status: :created
    end
  
    # GET /users/:id (users#show)
    def show
      if session[:user_id]
        # byebug
        user = User.find_by(id: session[:user_id])
        # render json: user, status: :ok
        render json: {user: user, workouts: user.workouts}, status: :ok
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end
  
  end