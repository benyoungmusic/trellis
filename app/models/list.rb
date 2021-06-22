class List < ApplicationRecord
    validates :title, :author_id, :board_id, presence: true
    validates :board_pos, presence: true

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id

    belongs_to :board,
        class_name: :Board,
        foreign_key: :board_id

    has_many :cards,
        class_name: :Card,
        foreign_key: :list_id
end
