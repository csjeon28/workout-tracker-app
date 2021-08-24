class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :date, :weight, :exercises
  # belongs_to :user, serializer: :user

  def exercises
    self.object.exercises.map do |exercise_obj|
      {
        id: exercise_obj.id,
        name: exercise_obj.name,
        calories: exercise_obj.calories,
        duration: exercise_obj.duration
      }
    end
  end
end
