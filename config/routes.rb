Rails.application.routes.draw do

  root 'posts#index'
  resources :posts
  get 'posts_json', to: 'posts#index_json'
end
