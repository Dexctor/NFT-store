import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export interface User {
  _id: ObjectId;
  email: string;
  password: string;
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const client = await clientPromise;
  const db = client.db("nft_store");
  return db.collection<User>("users").findOne({ email });
};

export const createUser = async (email: string, hashedPassword: string): Promise<ObjectId> => {
  const client = await clientPromise;
  const db = client.db("nft_store");
  const result = await db.collection<User>("users").insertOne({
      email,
      password: hashedPassword,
      _id: new ObjectId
  });
  return result.insertedId;
};

export const getUserById = async (userId: string): Promise<User | null> => {
  const client = await clientPromise;
  const db = client.db("nft_store");
  return db.collection<User>("users").findOne({ _id: new ObjectId(userId) });
};