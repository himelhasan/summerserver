import mongoose from "mongoose";
import "dotenv/config";

const pass = process.env.PASS;
const user = process.env.USER;
const URI = `mongodb+srv://${user}:${pass}@cluster0.verqpx7.mongodb.net/summerhome`;
console.log(pass);
console.log(user);
console.log(URI);
const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(URI);
    console.log("DATABASE CONNECTED");
  } catch (error: any) {
    console.log(error.message);
  }
};

export default dbConnect;
