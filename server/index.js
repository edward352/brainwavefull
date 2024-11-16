import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import cors from "cors";
//importing routes
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";
dotenv.config({
  path: ".env",
});
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/uploads", express.static("uploads"));
//using middleware
app.use(cors());
app.use(express.json());
//using routes
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server is runing on http://localhost:${PORT}`);
  connectDb();
});
