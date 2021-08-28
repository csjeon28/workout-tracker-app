class WorkoutsController < ApplicationController
    # skip_before_action :authorize
    before_action :authorize, :current_user
    skip_before_action :authorize, only: [:index, :create, :update, :destroy]
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        if session[:user_id]
            workouts = @current_user.workouts
            render json: workouts, include: [:exercise]
        end
        # byebug
        # workouts = @current_user.workouts
        # options = {include: [:user, :exercise]}
        # json = WorkoutSerializer.new(workouts, options).serializable_hash.to_json
        # render json: json, status: :ok
    end

    def create
        # byebug
        if session[:user_id]
            workout = @current_user.workouts.create(workout_params)
            workout.update!(user_id: session[:user_id])
            render json: {workout: workout}, include: [:user], status: :created
        else
            render json: { errors: ['You must be logged in to create a workout'] }, status: :unauthorized
        end
    end

    def show
        if session[:user_id]
            workout = find_workout
            # exercises = workout.exercises
            # render json: {workout: workout, exercises: exercises}
        # workout = find_workout
        render json: workout
        end
    end

    def update
        # FIGURE OUT WHY UPDATE PARAMS ISN'T ALLOWING WORKOUT AS A PARAM
        workout = find_workout
        if @current_user.id == session[:user_id]
            workout.update(workout_params)
            render json: workout
        end
        # workout = find_workout
        # workout.update(workout_params)
        # render json: workout

        # workout = find_workout
        # workout.update!(workout_params)
        # render json: workout

        # workout = find_workout
        # if workout[:user_id] == session[:user_id]
        #     workout.update(workout_params)
        #     render json: {workout: workout}, include: ['user'], status: :accepted
        # end
        
    end

    def destroy
        # byebug
        if session[:user_id]
            workout = find_workout
            workout.destroy
            head :no_content
        end
    end

    private

    def find_workout
        # Workout.find(params[:id])
        @current_user.workouts.find_by(params[:id])
    end

    def workout_params
        # params.permit(:date, :weight)
        params.permit(:id, :date, :weight)
        # params.require(:workout).permit(:id, :date, :weight, :user_id)
    end

    def authorize
        render json: { errors: ['Not authorized'] }, status: :unauthorized unless session.include? :user_id
    end
    # def authorize
    #     return render json: { errors: ['Not authorized'] }, status: :unauthorized unless session.include? :user_id
    # end

    # def render_unprocessable_entity_response(invalid)
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    # end


end
