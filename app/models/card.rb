class Card < ApplicationRecord
  validates :title, :author_id, :board_id, :list_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :board,
    class_name: :Board,
    foreign_key: :board_id
  
  belongs_to :list,
    class_name: :List,
    foreign_key: :list_id
    
end
