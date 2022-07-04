import CategoriesRepository from "../../repos/category.repository";
import CreateCategoryController from "./create/controller";
import CreateCategoryService from "./create/service";
import ListCategoryController from "./list/controller";
import ListCategoriesService from "./list/service";

const repository = CategoriesRepository.getInstance();

const createService = new CreateCategoryService(repository);
const createController = new CreateCategoryController(createService);

const lisService = new ListCategoriesService(repository);
const listController = new ListCategoryController(lisService);

export { createController as create, listController as list };
