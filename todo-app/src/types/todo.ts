import { Document } from "mongoose";

export interface ITodo extends Document {
  name: string
  description: string
  status: boolean
};

//Todo interface that extends the Document type provided by mongoose. We will be using it later to interact with MongoDB.
