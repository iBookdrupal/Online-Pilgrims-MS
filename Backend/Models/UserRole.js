const { model, Schema } = require("mongoose");

const userRoleSchema = new Schema({
  roleName: String,
  createdAt: String,
});

module.exports = model("UserRoles", userRoleSchema);
