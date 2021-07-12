const postsResolvers = require("./posts");
const commentsResolvers = require("./comments");
const usersResolvers = require("./users");
const registrationResolvers = require("./registrations");
const batchResolvers = require("./batches");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
    ...usersResolvers.Query,
    ...registrationResolvers.Query,
    ...batchResolvers.Query,
  },

  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...registrationResolvers.Mutation,
    ...batchResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
