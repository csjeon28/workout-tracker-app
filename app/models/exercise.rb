class Exercise < ApplicationRecord
    belongs_to :user
    belongs_to :workout

    validates :name, presence: true
    validates :calories, presence: true, numericality: {only_integer: true}
    validates :duration, presence: true
end
