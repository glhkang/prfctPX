Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :show, :create, :update, :destroy]
    
    resources :likes, only: [:index, :show, :create, :destroy]
    # post '/likes/getLikes', to: 'likes#index'
    # post '/likes/upLike', to: 'likes#create'
    # post 'likes/unLike', to: 'likes#destroy'
    resources :follows, only: [:index, :show, :create, :destroy]
  
  end
end
