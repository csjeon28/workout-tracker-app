class WorkoutsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        workouts = Workout.all
        options = {include: [:user]}
        json = WorkoutSerializer.new(workouts, options).serializable_hash.to_json
        render json: json, status: :ok
    end

    def create
        workout = @current_user.workouts.build(workout_params)
        if workout.save!
            render json: {workout: workout}, status: 201
        end
    end

    private

    def workout_params
        params.permit(:date, :weight, :user_id)
    end
end
