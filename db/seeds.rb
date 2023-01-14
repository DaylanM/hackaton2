User.delete_all
# Genre.delete_all
# Movie.delete_all
# Review.delete_all

@counter = 1
5.times do
  user = User.create(
    first_name: Faker::Movies::HowToTrainYourDragon.character,
    last_name: Faker::Movies::HowToTrainYourDragon.dragon,
    image: 'https://images.unsplash.com/photo-1645134050707-4a9181d4b45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    email: "test#{@counter}@test.com",
    password: 'password'
  )
  @counter += 1
end

3.times do
  genre = Genre.create(
    genre_type: Faker::Lorem.word,
    genre_des: Faker::Lorem.sentence(word_count: 3)
  )
end

2.times do
  movie = Movie.create(
    movie_name: Faker::Movie.title,
    description: Faker::Movie.quote,
    length: Faker::Number.between(from: 60, to: 280)
  )
end

5.times do
  review = Review.create(
    review_text: Faker::Lorem.paragraph,
    rating: Faker::Number.between(from: 0, to: 5)
  )

end