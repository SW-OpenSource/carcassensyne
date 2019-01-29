const Tag = `
  type Tag {
    _id: ID!
    title: String!
    color: String!
    creator: User
    list: List
    createdAt: String
    updatedAt: String
  }
`;
const TagQueries = `
  allTags: [Tag]!
  
  findTagById(_id: ID!): Tag
`;
const TagMutations = `
  addTag(
    title: String!
    color: String!
    creator: ID
    list: ID
  ): Tag!

  updateTag(
    _id: ID!
    title: String
    color: String
  ): Tag!
  
  deleteTag(
    _id: ID!
  ): Tag!
`;
const TagSchema = {
  Tag,
  TagQueries,
  TagMutations
};
export { TagSchema };