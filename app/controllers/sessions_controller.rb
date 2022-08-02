class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    
    # login feature
    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    # logout feature
    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

end
