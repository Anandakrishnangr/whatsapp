import { getUser } from '../../controllers/app.controller'

interface Context {
  request: any;
  response: any;
}

interface Args {
  request: any;
}

async function queryUserDetails(obj: any, args: Args, context: Context) {
  let { request, response } = context
  request.body = args['request']
  return await getUser(request, response)
}

const resolvers = {
  Query: {
    queryUserDetails: queryUserDetails,
  },
  Mutation:{
    login: async (obj: any, args: Args, context: Context) => {
      let { request, response } = context
      request.body = args['request']
      return await getUser(request, response)
    },
    requestOtp: async (obj: any, args: Args, context: Context) => {
      let { request, response } = context
      request.body = args['request']
      return await getUser(request, response)
    },
   
  }
}

export default resolvers
