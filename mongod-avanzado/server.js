import express from "express";
import { initMongoDB } from "./src/config/db-connection.js";
import productRouter from "./src/routes/product-router.js";
import userRouter from "./src/routes/user-router.js";
//import { errorHandler } from "./middlewares/error-handler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRouter);
app.use('/user', userRouter);

//app.use(errorHandler)

initMongoDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(8080, () => console.log("Server running on port 8080"));