Rails.application.routes.draw do
  resources :users, only: %i[show create]
  resources :events, only: %i[index]
  resources :userevents, only: %i[update destroy]

  resources :events, only: [] do
    resources :users, only: [] do
      resources :userevents, only: %i[create]
    end
  end
end
