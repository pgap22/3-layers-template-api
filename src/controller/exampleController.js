import {Controller} from "../classes/Controller.js"
import { exampleSchema, exampleUpdateSchema } from "../schemas/exampleSchema.js"
import { exampleService } from "../services/exampleService.js"

class ExampleController extends Controller{

}

const exampleController = new ExampleController(exampleSchema, exampleUpdateSchema, exampleService)

export { exampleController }