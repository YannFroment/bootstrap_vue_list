Rails.application.routes.draw do

  resources :posts
  get 'posts_json', to: 'posts#index_json'
end
