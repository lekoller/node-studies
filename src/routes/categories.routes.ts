import { Router } from "express";

import { create, list } from "../modules/cars/useCases/categories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return create.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return list.handle(req, res);
});

export default categoriesRoutes;
