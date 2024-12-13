class Strategy < ApplicationRecord
  validates :description, presence: true, uniqueness: true
end
