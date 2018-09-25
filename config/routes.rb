Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :freelance_documents
    end
  end
end
