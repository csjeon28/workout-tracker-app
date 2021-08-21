Rails.application.routes.draw do
  resources :users, only: [:create, :show, :index]
  
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
