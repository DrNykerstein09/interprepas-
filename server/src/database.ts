import mongoose from "mongoose";
import dotenv from "dotenv";
const mongoDBConnectionString =
  "mongodb+srv://jugodemanzana:Zyn50dJQGMDejBv3@cluster0.xhsaaaq.mongodb.net/test";

if (!mongoDBConnectionString) {
  console.error(
    "MongoDB connection string is not set. Please check your environment variables."
  );
} else {
  mongoose
    .connect(mongoDBConnectionString, {})
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.log(err));
}
