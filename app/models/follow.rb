# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Follow < ApplicationRecord
  validates :user_id, :follower_id, presence: true
  validates :user_id, uniqueness: { scope: [:follower_id]}

  belongs_to :user 
end
