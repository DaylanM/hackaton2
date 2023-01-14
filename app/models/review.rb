class Review < ApplicationRecord
  belongs_to :movie

  validates :review_text, :rating, presence: true
end