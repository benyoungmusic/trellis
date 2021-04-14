Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :boards, only: [:index]
    end

    resources :boards

    resource :session, only: [:create, :destroy]
  end

  root to: 'root#root'
end
