class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create, :show, :index]
    # before_action :authorize, only: [:show]
    skip_before_action :authorize, only: [:create, :index]

    #---------GET /users (users#index)---------
    def index
      @users = User.all
      render json: @users
    end

    #--------GET /users/:id (users#show)---------
    def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: {user: user, workouts: user.workouts, exercises: user.exercises}, status: :ok
      else
        render json: {errors: ["Not Authorized"]}, status: :unauthorized
      end
    end

    #--------POST /users (users#create)---------
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: {user: user, workouts: user.workouts, exercises: user.exercises}, status: :created
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
  
  end