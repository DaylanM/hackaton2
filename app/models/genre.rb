class Genre < ApplicationRecord
  validates :genre_type, :genre_des, presence: true
end
