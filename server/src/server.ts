import express from "express";
import routes from "./routes/routes";

import path from "path";
import cors from "cors";

import "reflect-metadata";
import './database';

const tmpFolder = path.resolve(__dirname, '..', 'tmp');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/public', express.static(tmpFolder));
app.use(routes);

app.listen(3333, () => {
    console.log("Server started! 😎");
});