import { ICategoriesRepository } from "../../../interfaces";
import Category from "../../../models/Category";

class ListCategoriesService {
  constructor(private repository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.repository.list()
  }
}

export default ListCategoriesService;
