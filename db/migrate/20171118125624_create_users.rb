class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :mobile
      t.string :email
      t.attachment :image

      t.timestamps
    end
  end
end
