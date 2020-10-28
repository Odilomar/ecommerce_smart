import express from "express";
import menu from "./menu.routes";
import products from "./products.routes";

const routes = express();

routes.use('/product', products);
routes.use('/menu', menu);

export default routes;