import { Document } from "mongoose";

export interface ITodo extends Document {
  name: string
  description: string
  status: boolean
};

//Todo interface that extends the Document type provided by mongoose, to interact with MongoDB.


