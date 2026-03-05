import { connect } from "mongoose";
//import mongoose from "mongoose";
// import 'dotenv/config'

export const initMongoDB = async () => {
  try {
    await connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB ✓");
  } catch (error) {
    throw new Error(error);
  }
};