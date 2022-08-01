class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create 


    end

    def user_params 
        params.permit(:username, :password, :password_confirmation, :role)
    end

end
