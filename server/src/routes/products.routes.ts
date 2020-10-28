import express from "express";
import { getRepository } from "typeorm";
import Product from "../models/Product";

const products = express();

products.get("/", async (request, response) => {
  try {
    const productsRepository = getRepository(Product);

    const products = await productsRepository.find({
      relations: ["group", "subgroup"],
      take: 10,
    });

    response.json(products);
  } catch (error) {
    response.status(404).json({ error });
  }
});

export default products;
