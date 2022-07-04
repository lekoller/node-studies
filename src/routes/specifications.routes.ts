import { Router } from "express";
import { create, list } from "../modules/cars/useCases/specifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  return create.handle(req, res);
});

specificationsRoutes.get("/", (req, res) => {
  return list.handle(req, res)
});

export default specificationsRoutes;
