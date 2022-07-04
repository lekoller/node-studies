import Specification from "../models/Specification";
import { ICreateSpecificationDTO } from "../interfaces";

class SpecificationsRepository {
  private specifications: Specification[];
  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });
    this.specifications.push(specification);

    return specification;
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find((s) => s.name === name);
  }
}

export default SpecificationsRepository;
