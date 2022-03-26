import express, { Express } from "express";
import mongoose, { CallbackError } from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const app: Express =  express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)
const uri = process.env.MONGO_URI || "mongodb://localhost:27017/todo-app"

const api = express();
api.use(cors()); // enable CORS on all our requests
api.use(express.json()); // parses incoming requests with JSON payloads
api.use(express.urlencoded({ extended: false })); // parses incoming requests with urlencoded payloads
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
    .connect(uri)
    .then(() => console.log("DB connection successful"))
    .catch(console.error);
/*
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster2.ofkfp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
// Mongoose.connect(uri, options).then(() => {
 const client = mongoose.connect(uri, options)
client
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err)) */
//(alias) const Mongoose: new (options?: mongoose.MongooseOptions | null | undefined) => typeof mongoose


// const client = mongoose.connect(uri, function(err: CallbackError) {
//     app.listen(PORT, () =>
//       console.log(`Server running on http://localhost:${PORT}`)
//     )
//   ) .catch((error: any) => {
//     throw error
//   })
