class CreateUserevents < ActiveRecord::Migration[6.0]
  def change
    create_table :userevents do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :event, null: false, foreign_key: true
      t.integer :rating

      t.timestamps
    end
  end
end
