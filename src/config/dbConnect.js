import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Kawan:Kawam1357-@api-projeto.njzdkqf.mongodb.net/API-projeto")

let db = mongoose.connection;

export default db;