import { Request, Response } from "express";

import ListSpecificationService from "./service";

class ListSpecificationController {

  constructor(private service: ListSpecificationService) {}

  handle(req: Request, res: Response): Response {
    const result = this.service.execute();

    return res.status(200).json(result);
  }
}

export default ListSpecificationController;
