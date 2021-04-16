class RemoveIndexFromBoardPos < ActiveRecord::Migration[5.2]
  def change
    remove_index :lists, :board_pos
    add_index :lists, :board_pos
  end
end
