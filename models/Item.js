const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create shema
const ItemShema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemShema);
