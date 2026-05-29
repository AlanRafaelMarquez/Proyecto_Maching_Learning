import {Schema, model} from 'mongoose'
const Esqueleto_de_tabla = Schema({
    Producto : String,
    stock : Number,
    Precio : Number
})

export const Tabla = new model("Tabla de productos",Esqueleto_de_tabla)
