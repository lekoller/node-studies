import Specification from "../../../models/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../../../interfaces";
import ApiError from "../../../../../shared/APIError";

class CreateSpecificationService {
  constructor(private repository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): Specification {
    const preexisting = this.repository.findByName(name);

    if (preexisting) {
      throw new ApiError("AlreadyExists", 400, "Specification already exists");
    }

    return this.repository.create({ name, description });
  }
}

export default CreateSpecificationService;
