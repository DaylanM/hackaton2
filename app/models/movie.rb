class Movie < ApplicationRecord
  belongs_to :genre
  validates :movie_name, :description, :length, presence: true
end
