import { gql } from 'graphql-tag';
const typeDefs = gql`
input QueryUserRequest{
  id: String!
}

input LoginRequest{
  phone: String!
  otp: Int
}

type Response {
  success: Boolean
  errors: ErrorInfo
}
type UserResponse {
  id: Int
  name: String
  role: String
  org: String
}

type QueryUserResponse{
  success: Boolean
  errors: ErrorInfo
  user: UserResponse
}

type ErrorInfo{
  code:String
  message:String
}

type Query {
  queryUserDetails(request:QueryUserRequest): QueryUserResponse
}

type Mutation {
  login(request: LoginRequest): Response
  requestOtp(request: LoginRequest): Response
}

`
export default typeDefs
