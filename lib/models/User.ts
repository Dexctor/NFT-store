import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}