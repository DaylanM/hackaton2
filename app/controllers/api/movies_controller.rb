class Api::MoviesController < ApplicationController
  before_action :set_genre
  before_action :set_movie, only: [:show, :update, :destroy]

  def index
    render json: @genre.movies
  end

  def show
    render json: @movie
  end

  def create
    @movie = @genre.movies.new(movie_params)
    if @movie.save
      render json: @movie
    else
      render json: { errors: @movie.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: { errors: @movie.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @movie.destroy
    render json: { message: 'movie deleted' }
  end

  private
  def movie_params
    params.require(:movie).permit(:movie_name, :description, :length)
  end

  def set_genre
    @genre = Genre.find(params[:genre_id])
  end

  def set_movie
    @movie = @genre.movies.find(params[:id])
  end
  
end
