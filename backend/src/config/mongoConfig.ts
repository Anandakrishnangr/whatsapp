import { default as mongoose } from "mongoose";
import { MONGO_URI } from "../config";

export const connectMongoose =async () => {
    return mongoose.connect(MONGO_URI??'').then((res) => {
        console.log("connected")
    }).catch((err) => {
        console.log(err)
        console.log("err")
    })
}