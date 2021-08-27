class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :duration, :user_id, :workout_id
  belongs_to :user, serializer: :user
  belongs_to :workout, serializer: :workout
end
