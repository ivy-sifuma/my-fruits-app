Rails.application.routes.draw do

  root to: 'home#index'
  
     resources :fruits, only: [:index, :create, :destroy, :update]
    end 
  end 

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
    
  


