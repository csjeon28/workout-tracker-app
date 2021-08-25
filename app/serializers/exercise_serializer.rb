class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :duration
  belongs_to :user, serializer: :user
  belongs_to :workout, serializer: :workout
end
