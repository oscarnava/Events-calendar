Rails.application.routes.draw do
  resources :events, only: [:index]
  resources :events, only: [] do
    resources :users, only: [] do
      resources :userevents, only: [:create]
    end
  end
end
