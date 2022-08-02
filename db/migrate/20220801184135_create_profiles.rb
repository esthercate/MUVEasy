class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :imgUrl
      t.string :title
      t.integer :price
      t.string :moverName
      t.string :location

      t.timestamps
    end
  end
end

