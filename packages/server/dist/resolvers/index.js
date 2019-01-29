import { UserResolver } from './User.resolver';
import { ListResolver } from './List.resolver';
import { ItemResolver } from './Item.resolver';
import { TagResolver } from './Tag.resolver';
const Resolvers = { ...UserResolver,
  ...ListResolver,
  ...ItemResolver,
  ...TagResolver
};
export { Resolvers };