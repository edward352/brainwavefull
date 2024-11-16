import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase:true,
    trim:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index:true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: "String",
    default: "User",
  },
  subscription: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
},
{
    timestamps:true,
  });
export const User = mongoose.model("User", Userschema);
