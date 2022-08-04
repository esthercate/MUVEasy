class RequestSerializer < ActiveModel::Serializer
  attributes :id, :moving_from, :moving_to, :moving_date, :additional_info, :user_id
end
