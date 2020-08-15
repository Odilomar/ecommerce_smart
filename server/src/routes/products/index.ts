import express from "express";

const products = express();

products.get("/", (request, response) => {
  response.json({ message: "A rota de produtos voltou!" });
});

export default products;
