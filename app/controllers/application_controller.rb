class ApplicationController < ActionController::API
    include ActionController::Cookies
    # include ActionController::Serialization
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    before_action :authorize
  
    private

    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    def authorize
      if !session[:user_id]
        render json: { errors: ['Not logged in'] }, status: :unauthorized
      else
        @current_user = User.find_by(id: session[:user_id])
      end
    end
  
    def invalid_record(e)
      render json: { errors: e.record.errors.full_messages }, status: 400
    end
  
end
