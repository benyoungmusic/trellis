class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :board_id, null: false
      t.integer :list_id, null: false
      t.text :description

      t.timestamps
    end
    add_index :cards, :author_id
    add_index :cards, :board_id
    add_index :cards, :list_id
    remove_index :lists, :board_pos
    add_index :lists, :board_pos
  end
end
