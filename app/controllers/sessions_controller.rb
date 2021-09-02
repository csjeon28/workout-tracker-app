class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    #----------POST /login (sessions#create)------------
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {user: user, workouts: user.workouts, exercises: user.exercises}, status: :ok
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    #-----------DELETE /logout (sessions#destroy)------------
    def destroy
        session.delete :user_id
        head :no_content
    end
end
