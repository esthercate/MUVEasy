class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
    skip_before_action :authorize, only: :create


    # signup feature
    def create 
        user = User.create!(user_params)
        session[:user_id] = user_id
        render json: user, status: :created
    end

    # stay signed in
    def show 
        render json: @current_user
    end

    

    private

    def user_params 
        params.permit(:username, :password, :password_confirmation, :role)
    end

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
