const { model, Schema } = require("mongoose");

const batchSchema = new Schema({
  batchName: String,
  createdAt: String,
});

module.exports = model("Batch", batchSchema);
