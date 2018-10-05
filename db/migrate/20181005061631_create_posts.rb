class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :date
      t.string :author
      t.text :content
      t.string :file
      t.string :country

      t.timestamps
    end
  end
end
