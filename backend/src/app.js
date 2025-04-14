/*importamos el framework express*/

import express from "express";
import cors from "cors";
import categoriasRoutes from "./routes/categorias.routes.js";
/*Asignar funcionalidad para mi server web*/
const app = express();

/*setear puerto a mi server web*/

app.set("port",5000);

app.use(cors());
/*rutas*/

app.use("/api/categorias",categoriasRoutes)
/*hacer disponible a mi server app para toda la aplicacion*/
export default app;