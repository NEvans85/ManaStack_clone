# == Schema Information
#
# Table name: card_supertypes
#
#  id           :integer          not null, primary key
#  supertype_id :integer
#  card_id      :integer
#

class CardSupertype < ApplicationRecord
  belongs_to :card
  belongs_to :supertype
end