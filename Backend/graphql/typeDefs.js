const gql = require("graphql-tag");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }

  type Registration {
    id: ID!
    firstName: String!
    lastName: String!
    OtherNames: String!
    Religion: String
    phoneNo: String
    ContactAddress: String
    State: String
    LocalGovt: String
    Ward: String
    NextofKinFullName: String!
    NextOfKinEmail: String
    NextofKinAddress: String
    createdAt: String!
  }

  type Batch {
    id: ID!
    batchName: String!
    createdAt: String!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String
    email: String!
  }

  input RegistrationInput {
    firstName: String!
    lastName: String!
    OtherNames: String!
    Religion: String
    phoneNo: String
    ContactAddress: String
    State: String
    LocalGovt: String
    Ward: String
    NextofKinFullName: String!
    NextOfKinEmail: String
    NextofKinAddress: String
    createdAt: String!
  }

  input BatchInput {
    batchName: String!
    createdAt: String
  }

  type Query {
    getPosts: [Post]
    getUsers: [User]
    getPost(postId: ID!): Post
    getRegistrations: [Registration]
    getBatch: [Batch]
  }

  type Mutation {
    registration(registrationInput: RegistrationInput): Registration

    batch(batchInput: BatchInput): Batch!
    deleteBatch(batchId: ID!): String!

    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!

    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }

  type Subscription {
    newPost: Post!
  }
`;
