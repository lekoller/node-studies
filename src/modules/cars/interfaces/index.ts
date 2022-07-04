import Category from "../models/Category";
import Specification from "../models/Specification";

export interface IErrorMessage {
  message: string;
  status: number;
}

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName(name: string): Category | undefined;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): Category;
}

export interface ISpecificationsRepository {
  findByName(name: string): Specification | undefined;
  list(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): Specification;
}
