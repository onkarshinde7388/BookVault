import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";
  
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
  
app.get("/", ( req, res ) => {
    res.send("Hello World");
});

app.use("/books", bookRoute);
app.use("/users", userRoute);

