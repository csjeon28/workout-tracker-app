Rails.application.routes.draw do
  resources :users, only: [:index, :create, :show]
  resources :workouts
  resources :exercises

  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  root "fallback#index"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
