class WorkoutSerializer
  include JSONAPI::Serializer
  attributes :date, :weight
  belongs_to :user, serializer: :user
end
