import { Request, Response } from "express";

import CreateSpecificationService from "./service";

class CreateSpecificationController {

  constructor(private service: CreateSpecificationService) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;
    const result = this.service.execute({ name, description });

    return res.status(201).json(result);
  }
}

export default CreateSpecificationController;
