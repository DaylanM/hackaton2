class Genre < ApplicationRecord
  has_many :movies
  validates :genre_type, :genre_des, presence: true
end
