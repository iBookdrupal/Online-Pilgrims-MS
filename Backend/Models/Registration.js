const { model, Schema } = require("mongoose");

const registrationSchema = new Schema({
  firstName: String,
  lastName: String,
  OtherNames: String,
  Religion: String,
  phoneNo: String,
  ContactAddress: String,
  State: String,
  LocalGovt: String,
  Ward: String,
  NextofKinFullName: String,
  NextofKinAddress: String,
  NextOfKinEmail: String,
  NextofKinPhoneNo: String,
  createdAt: String,
});

module.exports = model("Registration", registrationSchema);
