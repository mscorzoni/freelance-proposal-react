Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :freelance_documents
      resources :proposals
    end
  end
end
