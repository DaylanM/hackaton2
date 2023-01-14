class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :movie_name
      t.text :description
      t.integer :length

      t.timestamps
    end
  end
end
