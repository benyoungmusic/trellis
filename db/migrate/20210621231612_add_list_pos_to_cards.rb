class AddListPosToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :list_pos, :integer, null: false
  end
end
