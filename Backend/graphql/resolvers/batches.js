const Batch = require("../../Models/Batch");
const { UserInputError } = require("apollo-server");

module.exports = {
  Query: {
    async getBatch() {
      try {
        const batch = await Batch.find().sort({ createdAt: -1 });
        return batch;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async batch(_, { batchInput: { batchName, createdAt } }) {
      const batch = await Batch.findOne({ batchName });

      if (batch) {
        throw new UserInputError("Batch already Created", {
          errors: {
            batchName: "already created",
          },
        });
      }
      const newBatch = new Batch({
        batchName,
        createdAt: new Date().toISOString(),
      });

      const res = await newBatch.save();

      return {
        ...res._doc,
        ...res._id,
      };
    },

    async deleteBatch(_, { batchId }) {
      try {
        const batch = await Batch.findById(batchId);

        await batch.delete();
        return "batch deleted successfully";
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
