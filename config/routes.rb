Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :genres do
      resources :movies
    end

    resources :movies, except: [:index, :show, :create, :update, :destroy] do
      resources :reviews
    end
  end

end
