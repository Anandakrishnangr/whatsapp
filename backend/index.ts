import startServer from "./src"
import { connectMongoose } from "./src/config/mongoConfig"
console.log('hee')
connectMongoose()
startServer()