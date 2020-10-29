import express from "express";
import { getRepository } from "typeorm";

import fs from "fs";
import path from "path";

import Product from "../models/Product";
import ProductInterface from '../interfaces/product.interface';

const products = express();

products.get("/", async (request, response) => {
  try {
    const productsRepository = getRepository(Product);

    const dbProducts = await productsRepository.find({
      relations: ["group", "subgroup"],
      take: 10,
    });

    const productsData = dbProducts.map((dbProduct) => {
      const {id, name, file, group, subgroup} = dbProduct;

      const url = convertBufferToImage(name, file);

      const product: ProductInterface = {
        id,
        name,
        url,
        group,
        subgroup
      }

      return product;
    });

    response.json({ productsData });
  } catch (error) {
    response.status(404).json({ error });
  }
});

const convertBufferToImage = (name: string, file: Buffer) => {
  const productName = name
    .replace(/\-/gi, "")
    .replace(/\:/gi, "")
    .replace(/\./gi, "")
    .replace(/\(/gi, "")
    .replace(/\)/gi, "")
    .replace(/\ /gi, "-");

  const fileName = `${productName}.png`;
  const tmpFile = path.resolve(__dirname, "..", "..", `tmp/${fileName}`);

  if(!fs.existsSync(tmpFile)){
    fs.writeFile(tmpFile, file, "base64", () => {});
    //  fs.promises.writeFile(tmpFile, file, "base64");
  }

  return `/public/${fileName}`;
};

export default products;
