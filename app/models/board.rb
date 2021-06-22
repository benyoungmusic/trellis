class Board < ApplicationRecord
    validates :title, :author_id, presence: true

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id

    has_many :lists,
        class_name: :List,
        foreign_key: :board_id

    has_many :cards,
        class_name: :Card,
        foreign_key: :board_id

end
