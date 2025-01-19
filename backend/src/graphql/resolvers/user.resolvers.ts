import { getUser } from '../../controllers/app.controller'
async function queryUserDetails(obj, args, context) {
  let { request, response } = context
  request.body = args['request']
  return await getUser(request, response)
}

const resolvers = {
  Query: {
    queryUserDetails: queryUserDetails,
  },
  Mutation:{
    login: async (obj, args, context) => {
      let { request, response } = context
      request.body = args['request']
      return await getUser(request, response)
    },
    requestOtp: async (obj, args, context) => {
      let { request, response } = context
      request.body = args['request']
      return await getUser(request, response)
    },
   
  }
}

export default resolvers
