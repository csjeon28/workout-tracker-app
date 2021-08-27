class ExercisesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        if session[:user_id]
            exercises = Exercise.all
            render json: exercises
        end
    end

    def create
        exercise = @current_user.exercises.build(exercise_params)
        if exercise.save!
            render json: {exercises: exercise}, status: 201
        end
    end

    def show
        exercise = Exercise.find(params[:id])
        render json: exercise
    end

    private

    def exercise_params
        params.permit(:name, :calories, :duration, :user_id)
    end
end
