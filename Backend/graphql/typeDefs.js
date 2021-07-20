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

  type Registration {
    id: ID!
    firstName: String
    lastName: String
    otherNames: String
    religion: String
    gender: String
    phoneNo: String
    contactAddress: String
    state: String
    localGovt: String
    ward: String
    nextofKinFullName: String
    nextofKinEmail: String
    nextofKinAddress: String
    nextofKinPhoneNo: String
    createdAt: String
  }

  type Batch {
    id: ID!
    batchName: String!
    createdAt: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  type UserRoles {
    id: ID
    roleName: String
    createdAt: String
  }

  type Year {
    id: ID!
    year: String
    batchID: ID!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String
    email: String!
  }

  input RegistrationInput {
    firstName: String
    lastName: String
    otherNames: String
    religion: String
    phoneNo: String
    gender: String
    contactAddress: String
    state: String
    localGovt: String
    ward: String
    nextofKinFullName: String
    nextofKinEmail: String
    nextofKinAddress: String
    nextofKinPhoneNo: String
  }

  input BatchInput {
    batchName: String!
    createdAt: String
  }

  input UserRolesInput {
    roleName: String!
    createdAt: String
  }

  type Query {
    getPosts: [Post]
    getUsers: [User]
    getPost(postId: ID!): Post
    getRegistrations: [Registration]
    getBatch: [Batch]
    getUserRoles: [UserRoles]
  }

  type Mutation {
    registration(registrationInput: RegistrationInput): Registration

    batch(batchInput: BatchInput): Batch!
    deleteBatch(batchId: ID!): String!

    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!

    userRole(userRolesInput: UserRolesInput): UserRoles!
    deleteUserRole(userRoleId: ID!): String

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
