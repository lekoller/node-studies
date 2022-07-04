import { Request, Response } from "express";

import CreateCategoryService from "./service";

class CreateCategoryController {

  constructor(private service: CreateCategoryService) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;
    const result = this.service.execute({ name, description });

    return res.status(201).json(result);
  }
}

export default CreateCategoryController;
