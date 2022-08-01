class Profile < ApplicationRecord
    validates :imgUrl, presence: true
    validates :title, presence: true
    validates :price, presence: true
    validates :moverName, presence: true
    validates :location, presence: true
end
