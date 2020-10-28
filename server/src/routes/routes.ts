import express from "express";
import products from "./products.routes";

const routes = express();

routes.use('/product', products);

export default routes;