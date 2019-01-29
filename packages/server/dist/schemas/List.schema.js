const List = `
  type List {
    _id: ID!
    title: String!
    creator: User!
    icon: String!
    items: [Item]
    tags: [Tag]
    createdAt: String
    updatedAt: String
  }
`;
const ListQueries = `
  allLists: [List]!
  
  findListById(_id: ID!): List
`;
const ListMutations = `
  addList(
    title: String!
    creator: ID!
    icon: String!
  ): List!

  updateList(
    _id: ID!
    title: String
    icon: String
    items: [ID]
    tags: [ID]
  ): List!
  
  deleteList(
    _id: ID!
  ): List!
`;
const ListSchema = {
  List,
  ListQueries,
  ListMutations
};
export { ListSchema };