const postsResolvers = require("./posts");
const commentsResolvers = require("./comments");
const usersResolvers = require("./users");
const registrationResolvers = require("./registrations");
const batchResolvers = require("./batches");
const userRoleResolvers = require("./userRoles");

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
    ...userRoleResolvers.Query,
  },

  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...registrationResolvers.Mutation,
    ...batchResolvers.Mutation,
    ...userRoleResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
