class Api::GenresController < ApplicationController
  before_action :set_genre, only: [:show, :update, :destroy]

  def index
    render json: Genre.all
  end

  def show
    render json: @genre
  end

  def create
    @genre = Genre.new(genre_params)
    if @genre.save
      render json: @genre
    else
      render json: { errors: @genre.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @genre.update(genre_params)
      render json: @genre
    else
      render json: { errors: @genre.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @genre.destroy
    render json: { message: 'genre deleted' }
  end

  private
  def genre_params
    params.require(:genre).permit(:genre_type, :genre_des)
  end

  def set_genre
    @genre = Genre.find(params[:id])
  end
end
