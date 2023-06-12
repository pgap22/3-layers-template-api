import { Router } from "express";
import { exampleController } from "../../controller/exampleController";

const router = Router();

router.route("/")
    .get(exampleController.obtenerTodos)
    .post(exampleController.crear)

router.route("/:id")
    .get(exampleController.obtenerUno)
    .put(exampleController.actualizarUno)
    .delete(exampleController.eliminarUno)

export default router