import express, { response } from "express";
import { request } from "http";
import { getRepository, IsNull, MoreThan, Not } from "typeorm";
import Group from "../models/Group";

const menu = express();

menu.get("/", async (request, response) => {
  try {
    const menuRepository = getRepository(Group);

    const menus = await menuRepository.find({
      take: 10,
      order: {
        id: "ASC",
      },
    });

    response.json(menus);
  } catch (error) {
    response.status(404).json({ error });
  }
});

export default menu;
