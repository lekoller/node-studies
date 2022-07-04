import Category from "../../../models/Category";
import {
  ICreateCategoryDTO,
  ICategoriesRepository,
} from "../../../interfaces";
import ApiError from "../../../../../shared/APIError";

class CreateCategoryService {
  constructor(private repository: ICategoriesRepository) {}

  execute({ name, description }: ICreateCategoryDTO): Category {
    const preexisting = this.repository.findByName(name);

    if (preexisting) {
      throw new ApiError("AlreadyExists", 400, "Category already exists");
    }

    return this.repository.create({ name, description });
  }
}

export default CreateCategoryService;
