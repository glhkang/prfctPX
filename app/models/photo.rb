# == Schema Information
#
# Table name: photos
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  description     :text
#  category        :integer          not null
#  location        :string
#  photographer_id :integer          not null
#  archived        :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Photo < ApplicationRecord
  validates :title, presence: true
  validates :category, presence: true
  validate :ensure_photo
  validates :photographer_id, presence: true

  belongs_to :photographer,
    class_name: :User,
    foreign_key: :photographer_id

  has_many_attached :photo

  has_many :likes, dependent: :destroy


  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
  
end
