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
          otherNames,
          religion,
          gender,
          phoneNo,
          contactAddress,
          state,
          localGovt,
          ward,
          nextofKinFullName,
          nextofKinAddress,
          nextofKinEmail,
          nextofKinPhonNo,
        },
      }
    ) {
      const newRegistration = new Registration({
        firstName,
        lastName,
        otherNames,
        religion,
        gender,
        phoneNo,
        contactAddress,
        state,
        localGovt,
        ward,
        nextofKinFullName,
        nextofKinAddress,
        nextofKinEmail,
        nextofKinPhonNo,
        createdAt: new Date().toISOString(),
      });

      const res = await newRegistration.save();
      console.log(res);

      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
};
