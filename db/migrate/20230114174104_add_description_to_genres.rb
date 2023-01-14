class AddDescriptionToGenres < ActiveRecord::Migration[7.0]
  def change
    add_column :genres, :genre_des, :text
  end
end
