import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONODB_URI}`);
    console.log(process.env.MONODB_URI);
    console.log(`mongodb connected`);
  } catch (error) {
    console.log(error);
  }
};
