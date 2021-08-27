class Workout < ApplicationRecord
    belongs_to :user 
    has_many :exercises

    validates :date, presence: true
    validates :weight, presence: true, numericality: {only_integer: true}
end
