# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_04_150424) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "airposts", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "slug"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "title"
  end

  create_table "chatters", force: :cascade do |t|
    t.string "headline"
    t.text "chat"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "likes"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_chatters_on_user_id"
  end

  create_table "cryptodashes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "token_id"
    t.index ["token_id"], name: "index_cryptodashes_on_token_id"
    t.index ["user_id"], name: "index_cryptodashes_on_user_id"
  end

  create_table "currencies", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.bigint "max_supply"
    t.string "currency_symbol"
    t.string "slug"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "chatter_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["chatter_id"], name: "index_likes_on_chatter_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "score"
    t.bigint "airpost_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["airpost_id"], name: "index_reviews_on_airpost_id"
  end

  create_table "tokens", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.bigint "max_supply"
    t.string "currency_symbol"
    t.string "slug"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "image_url"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "watchlists", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "chatter_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["chatter_id"], name: "index_watchlists_on_chatter_id"
    t.index ["user_id"], name: "index_watchlists_on_user_id"
  end

  add_foreign_key "cryptodashes", "users"
  add_foreign_key "likes", "chatters"
  add_foreign_key "likes", "users"
  add_foreign_key "reviews", "airposts"
  add_foreign_key "watchlists", "chatters"
  add_foreign_key "watchlists", "users"
end
