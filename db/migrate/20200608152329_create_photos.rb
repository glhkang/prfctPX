class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.text :description
      t.integer :category, null: false
      t.string :location
      t.integer :photographer_id, null: false
      t.boolean :archived, default: false
      t.timestamps
    end
    add_index :photos, :title
    add_index :photos, :location
    add_index :photos, :photographer_id
    add_index :photos, :archived
  end
end
