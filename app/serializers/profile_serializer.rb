class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :imgUrl, :title, :price, :moverName, :location

  belongs_to :user
end
