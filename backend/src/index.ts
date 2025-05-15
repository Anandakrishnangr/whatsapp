import * as express from 'express'
import * as swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from '../swagger.json'
import * as Redis from './utils/redis'
import AppRouter from './routes/app.route'
import * as cors from 'cors'
// Graphql Imports
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import resolvers from './graphql/'
import typeDefs from './graphql/typedefs/typeDefs'
import * as http from 'http'
import { NextFunction, Request, Response } from "express"
const app = express.default()

export default async function startServer() {
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: process.env.NODE_ENV !== 'production',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })
  await server.start()

  app.use(express.json())
  // app.use(Redis.attachRedisClient)
  // Graphql Entry point
  app.use(
    '/graphql',
    cors.default(),  
      express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({
        // Add optional configuration options
        request: req,
        response: res,
      }),
    })
  )

  app.get('/health', (req: Request, res: Response, next: NextFunction) => {
    res.send('OK')
  })
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  app.use('/api/', AppRouter)

  httpServer.listen(process.env.PORT || 3000, () => {
    console.log(`server started on ${process.env.PORT}!`)
  })
}

