"use strict";

var _cliente = require("./cliente");
var _impuestos = require("./impuestos");
var nombre = "cliente1";
var montoBrutoAnual = 1000000;
var deducciones = 50000;
var impuestosDe = new _impuestos.Impuestos(montoBrutoAnual, deducciones);
var nuevoCliente = new _cliente.Cliente(nombre);
nuevoCliente.impuesto = impuestosDe;
console.log(nuevoCliente.calcularImpuesto());