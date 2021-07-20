const UserRole = require("../../Models/UserRole");
const { UserInputError } = require("apollo-server");

module.exports = {
  Query: {
    async getUserRoles() {
      try {
        const userRole = await UserRole.find().sort({ createdAt: -1 });
        return userRole;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async userRole(_, { userRolesInput: { roleName, createdAt } }) {
      const userRole = await UserRole.findOne({ roleName });

      if (userRole) {
        throw new UserInputError("UserRole already Created", {
          errors: {
            roleName: "already created",
          },
        });
      }
      const newUserRole = new UserRole({
        roleName,
        createdAt: new Date().toISOString(),
      });

      const res = await newUserRole.save();

      return {
        ...res._doc,
        ...res._id,
      };
    },

    async deleteUserRole(_, { userRoleId }) {
      try {
        const userRole = await UserRole.findById(userRoleId);

        await userRole.delete();
        return "User Role deleted successfully";
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
