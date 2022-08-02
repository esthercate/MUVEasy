class UsersController < ApplicationController
   
    # signup feature
    def create 
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end


    # stay signed in
    def show 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: "Not authorised", status: :unauthorized
        end
    end

    private

    def user_params 
        params.permit(:username, :password, :password_confirmation, :role)
    end

end
