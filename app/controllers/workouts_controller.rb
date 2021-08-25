class WorkoutsController < ApplicationController
    # skip_before_action :authorize
    skip_before_action :authorize, only: [:index]
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        if session[:user_id]
            workouts = Workout.all
            render json: workouts, include: [:exercise]
        end
        # workouts = Workout.all
        # options = {include: [:user, :exercise]}
        # json = WorkoutSerializer.new(workouts, options).serializable_hash.to_json
        # render json: json, status: :ok
    end

    def create
        # byebug
        workout = @current_user.workouts.build(workout_params)
        if workout.save!
            render json: workout, status: :created
        end
    end

    def show
        if session[:user_id]
            workout = find_workout
            exercises = workout.exercises
            render json: {workout: workout}
        end
    end

    def update
        if session[:user_id]
            workout = find_workout
            workout.update!(workout_params)
            render json: {workout: workout}
        end
    end

    def destroy
        if session[:user_id]
            workout = find_workout
            workout.delete
            head :no_content
        end
    end

    private

    def find_workout
        Workout.find(params[:id])
    end

    def workout_params
        params.permit(:date, :weight, :user_id)
        # GETTING UNPERMITTE PARAMTER: :workout THAT I NEED TO FIX TOMORROW
    end

    # def render_unprocessable_entity_response(invalid)
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    # end
end
