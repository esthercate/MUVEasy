class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :role

 has_one :profile
end
