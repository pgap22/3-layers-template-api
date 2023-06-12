import {Service} from "../classes/Service.js"
import { Example } from "../database/Example.js"

class ExampleService extends Service{

}

const exampleService = new ExampleService(Example)

export { exampleService }