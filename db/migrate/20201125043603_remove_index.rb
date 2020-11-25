class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, name: "index_likes_on_photo_id_and_user_id"
  end
end
