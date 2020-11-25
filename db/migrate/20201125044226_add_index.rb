class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:photo_id, :user_id], unique: true
  end
end
