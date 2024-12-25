import userResolver  from "./resolvers/user.resolvers";
import { merge } from 'lodash'
const resolvers = merge(
    userResolver
);

export default resolvers;