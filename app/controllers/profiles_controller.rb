class ProfilesController < ApplicationController

    def index 
        render json: Profile.all
    end

    def create 
      profile = Profile.create!(profile_params)
      render json: profile, status: :created
    end

    private 

    def profile_params 
        params.permit(:imgUrl, :moverName, :title, :price, :location)
    end
    
end
