class Movie < ApplicationRecord
  validates :movie_name, :description, :length, presence: true
end
