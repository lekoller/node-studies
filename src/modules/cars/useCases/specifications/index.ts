import SpecificationsRepository from "../../repos/specification.repository";
import CreateSpecificationController from "./create/controller";
import CreateSpecificationService from "./create/service";
import ListSpecificationController from "./list/controller";
import ListSpecificationService from "./list/service";

const repository = SpecificationsRepository.getInstance();

const createService = new CreateSpecificationService(repository);
const createController = new CreateSpecificationController(createService);

const lisService = new ListSpecificationService(repository);
const listController = new ListSpecificationController(lisService);

export { createController as create, listController as list };
