const checkAuth = require("../../utils/check-auth");
const Registration = require("../../Models/Registration");

module.exports = {
  Query: {
    async getRegistrations() {
      try {
        const registration = await Registration.find().sort({ createdAt: -1 });
        return registration;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async registration(
      _,
      {
        registrationInput: {
          firstName,
          lastName,
          OtherNames,
          Religion,
          phoneNo,
          ContactAddress,
          State,
          LocalGovt,
          Ward,
          NextofKinFullName,
          NextOfKinAdress,
          NextOfKinEmail,
          NextOfKinPhonNo,
        },
      }
    ) {
      const newRegistration = new Registration({
        firstName,
        lastName,
        OtherNames,
        Religion,
        phoneNo,
        ContactAddress,
        State,
        LocalGovt,
        Ward,
        NextofKinFullName,
        NextOfKinAdress,
        NextOfKinEmail,
        NextOfKinPhonNo,
        createdAt: new Date().toISOString(),
      });

      const res = await newRegistration.save();

      return {
        ...res._doc,
        ...res._id,
      };
    },
  },
};
