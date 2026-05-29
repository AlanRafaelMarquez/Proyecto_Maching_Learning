import { Tabla } from "../models/Papeleria.model.js";

Tabla.create({
    Producto : "Hojas de Papel",
    stock : 5000,
    Precio : 1
},
{
    Producto : "Plumas",
    stock : 200,
    Precio : 7
},{
    Producto : "Lapices",
    stock : 100 ,
    Precio : 3
}
)

export const Test = () => console.log("Llamar el controlador en app")
