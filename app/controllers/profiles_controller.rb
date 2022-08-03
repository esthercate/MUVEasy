class ProfilesController < ApplicationController

    def index 
        profiles = Profile.all
        render json: profiles
    end

    def create 
        profile = @current_user.profile.create!(profile_params)
        render json: profile, status: :created
    end

    private 

    def profile_params 
        params.permit(:imgUrl, :moverName, :title, :price, :location)
    end
    

end
