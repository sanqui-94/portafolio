class CreateStrategies < ActiveRecord::Migration[8.0]
  def change
    create_table :strategies do |t|
      t.text :description, null: false
      t.boolean :useful, default: false, null: false

      t.timestamps
    end
  end
end
