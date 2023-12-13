import express from "express";
import emojis from "./emojis";
import { AllProducts } from "../app/modules/product/product.controller";
import productRouter from "../app/modules/product/product.router";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    data: AllProducts,
  });
});

router.use("/emojis", emojis);

router.use("/products", productRouter);

export default router;
