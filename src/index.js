import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import v1RouterExample from "./v1/routes/exampleRoutes.js"

dotenv.config();

//Configuracion del servidor
const PORT = process.env.PORT || 4000
const app  = express();

//Permite recibir en el body datos en JSON
app.use(express.json())
//Permite manejar peticiones HTTP de otros lados
app.use(cors())

//Router
app.use("/api/v1/examples", v1RouterExample)

app.listen(PORT, ()=>{
    console.log("Servidor escuchando el puerto: "+PORT)
})
