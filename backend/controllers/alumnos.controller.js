import { Tabla } from "../models/alumnos.model.js";

Tabla.create({
    nombre : "Coffe",
    edad : 20,
    materia : "Todas"
})

export const Test = () => console.log("Llamar el controlador en app")
