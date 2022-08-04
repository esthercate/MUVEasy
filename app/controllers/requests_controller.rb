class RequestsController < ApplicationController

    def index 
        render json: Request.all
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

end
