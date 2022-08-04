class RequestsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index 
        @current_user = User.find_by(id: session[:user_id])
        requests = @current_user.requests.all 
        render json: requests
    end

    def create 
        @current_user = User.find_by(id: session[:user_id])
        request = @current_user.requests.create!(request_params)
        render json: request, status: :created
    end 


    private

    def request_params 
        params.permit(:moving_from, :moving_to, :moving_date, :additional_info)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found 
        render json: {errors: "not found"}, status: :not_found
    end

end
