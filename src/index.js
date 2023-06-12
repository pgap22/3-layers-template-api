import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();

//Configuracion del servidor
const PORT = process.env.PORT || 8080
const app  = express();

//Permite recibir en el body datos en JSON
app.use(express.json())
//Permite manejar peticiones HTTP de otros lados
app.use(cors())

//Router


app.listen(PORT, ()=>{
    console.log("Servidor escuchando el puerto: "+PORT)
})