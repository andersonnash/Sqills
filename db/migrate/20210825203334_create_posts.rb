class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :image_url
      t.text :description

      t.timestamps
    end
  end
end
