import { Request, Response } from "express";

import ListCategoriesService from "./service";

class ListCategoryController {

  constructor(private service: ListCategoriesService) {}

  handle(req: Request, res: Response): Response {
    const result = this.service.execute();

    return res.status(200).json(result);
  }
}

export default ListCategoryController;
