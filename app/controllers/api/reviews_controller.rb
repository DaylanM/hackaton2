class Api::ReviewsController < ApplicationController
  before_action :set_movie
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    render json: @movie.reviews
  end

  def show
    render json: @review
  end

  def create
    @review = @movie.reviews.new(review_params)
    if @review.save
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @review.destroy
    render json: { message: 'review deleted' }
  end

  private
  def review_params
    params.require(:review).permit(:review_text, :rating)
  end

  def set_movie
    @movie = Movie.find(params[:movie_id])
  end

  def set_review
    @review = @movie.reviews.find(params[:id])
  end
  
end
