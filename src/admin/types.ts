import * as mongoDB from "mongodb"

export const collections:{users?: mongoDB.Collection}={}

export async function connectToDatabase() {
    const client:mongoDB.MongoClient=new mongoDB.MongoClient("mongodb+srv://m001-mongodb-basics:m001mongodb@cluster0.rwedk5w.mongodb.net/?retryWrites=true&w=majority")

    await client.connect()

    const db:mongoDB.Db=client.db("db3")
    
    const users:mongoDB.Collection=db.collection("user2")

    collections.users=users
}