# frozen_string_literal: true

class Event < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :begins, presence: true
  validates :begins, presence: true
  validates :ends, presence: true
  validates :category, presence: true

  has_many :user_events
end
