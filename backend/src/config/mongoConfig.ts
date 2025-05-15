import { default as mongoose } from "mongoose";

export const connectMongoose =async () => {
    return mongoose.connect(process.env.MONGO_URI??'').then((res) => {
        console.log("connected")
    }).catch((err) => {
        console.log(err)
        console.log("err")
    })
}