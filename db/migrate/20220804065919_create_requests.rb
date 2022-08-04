class CreateRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :requests do |t|
      t.string :moving_from
      t.string :moving_to
      t.string :moving_date
      t.string :additional_info
      t.integer :user_id

      t.timestamps
    end
  end
end
