import express from "express";
import products from "./products";

const routes = express();

routes.use('/products', products);

export default routes;