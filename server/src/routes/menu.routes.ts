import express, { response } from "express";
import { request } from "http";
import { getRepository } from "typeorm";
import Group from "../models/Group";

const menu = express();

menu.get("/", async (request, response) => {
  try {
    const menuRepository = getRepository(Group);

    const menu = await menuRepository.find({
      take: 10,
    });

    response.json({ menu });
  } catch (error) {
    response.status(404).json({ error });
  }
});

export default menu;
