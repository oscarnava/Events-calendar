# frozen_string_literal: true

class Userevent < ApplicationRecord
  belongs_to :user
  belongs_to :event
end
