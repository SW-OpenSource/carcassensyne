const User = `
  type User {
    _id: ID!
    forename: String!
    surname: String!
    email: String!
    username: String!
    avatar: String!
    lists: [List]
    createdAt: String!
    updatedAt: String
    scope: [String]
    tags: [Tag]
  }
`;
const UserQueries = `
  allUsers: [User]!

  me(_id: ID!): User!
  
  findUserById(_id: ID!): User

  login(
    username: String!
    password: String!
  ): String!
  
`;
const UserMutations = `
  register(
    forename: String!
    surname: String!
    email: String!
    username: String!
    password: String!
    avatar: String!
  ): String!

  changePassword(
    _id: String!
    username: String
    password: String
    newPassword: String
  ): User!

  updateUser(
    _id: ID!
    forename: String
    surname: String
    email: String
    username: String
    avatar: String
    lists: [ID]
    createdAt: String
    updatedAt: String
    scope: [String]
    tags: [ID]
  ): User!
  
  deleteUser(_id: ID!): User!
`;
const UserSchema = {
  User,
  UserQueries,
  UserMutations
};
export { UserSchema };