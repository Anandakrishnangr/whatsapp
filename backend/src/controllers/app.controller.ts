import { Request, Response } from 'express'
import Login from '../models/auth.models'
export async function addUser(request:Request, response:Response) {
  try {
    try {
      let { password, email } = request.body
     let user =  await Login.create({ password, email })
     return user
  } catch (error) {

  }
   
  } catch (error) {
    response.send({
      status: false,
      message: error.message,
    })
  }
}

export async function getUser(request:Request, response:Response) {
  let result: UserResponse = {
    success: false,
    user: null,
    errors: null,
  }
  try {

    return {
      success:true,
      user:{
      id: 1,
      name: 'ananda',
      role: 'admin',
      org: 'vo'
    }
  }
    // let userResult = await request.redisClient.get(request.body.id)
    // if (userResult == null) {
    //   result.errors = {
    //     code: '200',
    //     message: 'No result',
    //   }
    //   result.success = true
    // } else {
    //   result.user = JSON.parse(userResult)
    //   result.success = true
    // }
  } catch (error) {
    result.success = true
    result.errors = {
      code: '500',
      message: error.message,
    }
  }
  return result
}

interface UserResponse {
  success: Boolean
  user: User
  errors: Error
}

interface User {
  id: String
  name: String
  role: String
  org: String
}
interface Error {
  code: String
  message: String
}

export async function health(request, response) {
  response.status(200).send({
    status: true,
    message: 'ok',
  })
}
