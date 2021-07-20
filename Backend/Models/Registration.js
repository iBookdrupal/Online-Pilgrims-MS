const { model, Schema } = require("mongoose");

const registrationSchema = new Schema({
  firstName: String,
  lastName: String,
  otherNames: String,
  religion: String,
  gender: String,
  phoneNo: String,
  contactAddress: String,
  state: String,
  localGovt: String,
  ward: String,
  nextofKinFullName: String,
  nextofKinAddress: String,
  nextofKinEmail: String,
  nextofKinPhoneNo: String,
  createdAt: String,
});

module.exports = model("Registration", registrationSchema);
