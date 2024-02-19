import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth";
import chatBotRoutes from "./routes/chatBot";

const app: Application = express();

const allowedOrigin = "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
  })
);


// app.use(logger);
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chatbot", chatBotRoutes)

export default app;
