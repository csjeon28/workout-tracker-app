class Workout < ApplicationRecord
    belongs_to :user 
    has_many :exercises

    validates :date, presence: true
    validates :weight, presence: true, numericality: {only_integer: true}
    # validates :date, format: {with: /^\d{2}\/\d{2}\/\d{4}$/, multiline: true}
end
