import { buildSchema } from 'graphql';
import { UserSchema } from './User.schema';
import { ListSchema } from './List.schema';
import { ItemSchema } from './Item.schema';
import { TagSchema } from './Tag.schema';
const Schema = buildSchema(`
  ${UserSchema.User}
  ${ListSchema.List}
  ${ItemSchema.Item}
  ${TagSchema.Tag}

  type RootQuery {
    ${UserSchema.UserQueries}
    ${ListSchema.ListQueries}
    ${ItemSchema.ItemQueries}
    ${TagSchema.TagQueries}
  }

  type RootMutation {
    ${UserSchema.UserMutations}
    ${ListSchema.ListMutations}
    ${ItemSchema.ItemMutations}
    ${TagSchema.TagMutations}
  }

  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`);
export { Schema };