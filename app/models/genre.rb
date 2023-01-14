class Genre < ApplicationRecord
  has_many :movies, dependent: :destroy

  validates :genre_type, :genre_des, presence: true
end
