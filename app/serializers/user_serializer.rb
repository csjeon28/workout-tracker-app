class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :workouts

  def workouts
    self.object.workouts.map do |workout_obj|
      {
        id: workout_obj.id,
        date: workout_obj.date,
        weight: workout_obj.weight
      }
    end
  end
end
