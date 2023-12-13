import { Request, Response } from "express";
import { getAllProductsFromDB } from "./product.service";

export const AllProducts = async (req: Request, res: Response) => {
  const products = await getAllProductsFromDB();
  res.status(200).json({
    status: "success",
    data: products,
  });
};
