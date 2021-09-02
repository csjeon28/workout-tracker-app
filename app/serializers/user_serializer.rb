class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :workouts, :exercises

  def workouts
    self.object.workouts.map do |workout_obj|
      {
        id: workout_obj.id,
        date: workout_obj.date,
        weight: workout_obj.weight
      }
    end
  end

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
