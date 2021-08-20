class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :calories
      t.integer :duration
      t.integer :user_id
      t.integer :workout_id

      t.timestamps
    end
  end
end
