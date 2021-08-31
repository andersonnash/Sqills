Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :categories
  resources :posts
  resources :users
  # put '/category/:category_id/posts/:id', 
  # to: 'category #add_category_to_post'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
