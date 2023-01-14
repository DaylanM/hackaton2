class Movie < ApplicationRecord
  belongs_to :genre
  has_many :reviews, dependent: :destroy

  validates :movie_name, :description, :length, presence: true
end
