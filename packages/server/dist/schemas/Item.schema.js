const Item = `
  type Item {
    _id: ID!
    title: String!
    icon: String!
    list: List!
    creator: User!
    tags: [Tag]
    note: String
    done: Boolean
    createdAt: String
    updatedAt: String
  }
`;
const ItemQueries = `
  allItems: [Item]!
  
  findItemById(_id: ID!): Item
`;
const ItemMutations = `
  addItem(
    title: String!
    icon: String!
    list: ID!
    creator: ID!
    tags: [ID]
    note: String
  ): Item!

  updateItem(
    _id: ID!
    title: String
    icon: String
    list: ID
    tags: [ID]
    note: String
    done: Boolean
  ): Item!
  
  deleteItem(
    _id: ID!
  ): Item!
`;
const ItemSchema = {
  Item,
  ItemQueries,
  ItemMutations
};
export { ItemSchema };