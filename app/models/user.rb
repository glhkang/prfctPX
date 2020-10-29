# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  attr_reader :password
  # validates :username, allow_nil: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :photos,
    class_name: :Photo,
    foreign_key: :photographer_id

  def self.find_by_credentials(username, password)
    user = User.find_by(email: username) || User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
