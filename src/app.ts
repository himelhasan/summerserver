import express, { Application } from "express";
// import morgan from "morgan";
// import helmet from "helmet";
import cors from "cors";
import * as middlewares from "./middlewares";
import api from "./api";
// import MessageResponse from "./interfaces/MessageResponse";
import dbConnect from "./app/utils/dbConnect";
import productRouter from "./app/modules/product/product.router";

require("dotenv").config();

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

// app.use(morgan("dev"));
// app.use(helmet());

app.get("/", (req, res) => {
  res.send("Summer Home server is running on port 8000🦄🌈✨👋🌎🌍🌏✨🌈🦄");
});

app.use("/api/v1", api);

// products api
app.use("/api/v1/products", productRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
