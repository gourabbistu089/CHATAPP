import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser'
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// middlewares
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb", extended: true}));
app.use(express.static("public"))
app.use(cookieParser());

// routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/message", messageRoutes);


export {app};