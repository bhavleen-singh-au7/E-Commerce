import express from "express";
import dotenv from "dotenv";
import color from "colors";
import connectDB from "./config/db.js";
import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware.js";

import userRoutes from "./routes/userRoute.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .yellow.bold
  )
);
