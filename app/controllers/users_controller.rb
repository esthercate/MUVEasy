class UsersController < ApplicationController
     rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    

    def create 
        user = User.create!(user_params)
        session[:user_id] = user_id
        render json: user, status: :created
    end





    #delete this
    def index 
        users = User.all
       render json: users
    end


    private

    def user_params 
        params.permit(:username, :password, :password_confirmation, :role)
    end

    def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
