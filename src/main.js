import { Cliente } from "./cliente.js";
import { Impuestos } from "./impuestos.js";

let nombre = "cliente1";
let montoBrutoAnual = 1000000;
let deducciones = 50000;

const impuestosDe = new Impuestos(montoBrutoAnual, deducciones);
const nuevoCliente = new Cliente(nombre);

nuevoCliente.impuesto = impuestosDe;

console.log(nuevoCliente.calcularImpuesto());
