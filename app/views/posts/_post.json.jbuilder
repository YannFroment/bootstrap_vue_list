json.extract! post, :id, :title, :date, :author, :content, :file, :country, :created_at, :updated_at
json.url post_url(post, format: :json)
