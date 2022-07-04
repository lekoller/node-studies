import { ISpecificationsRepository } from "../../../interfaces";
import Specification from "../../../models/Specification";

class ListSpecificationService {
  constructor(private repository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.repository.list()
  }
}

export default ListSpecificationService;
