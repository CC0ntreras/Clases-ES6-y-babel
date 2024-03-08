import { Impuestos } from "./impuestos.js";

export class Cliente {
  constructor(nombre) {
    this._nombre = nombre;
    this._impuesto = null;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(value) {
    this._nombre = value;
  }
  get impuesto() {
    return this._impuesto;
  }
  set impuesto(value) {
    if (!(value instanceof Impuestos))
      throw new Error("El impuesto debe ser una instancia de impuestos.");
    this._impuesto = value;
  }
  calcularImpuesto() {
    if (!this._impuesto) return("No sé ha definido el impuesto aún");

    const { montoBrutoAnual, deducciones } = this._impuesto;
    
    if (montoBrutoAnual < 0 && deducciones < 0) {
      return("Monto bruto anual y las deducciones no pueden ser negativos");
    }

    if (montoBrutoAnual < 0) {
      return("El monto bruto anual no puede ser negativo");
    }

    if (deducciones < 0) {
      return("Las deducciones no puede ser negativo");
    }
    
    if (deducciones > montoBrutoAnual) {
      return "El cliente: " + this._nombre + " queda exonerado de Impuestos Anuales";
    }

    return "El cliente: " + this._nombre + " debe pagar un impuesto igual a: " + (montoBrutoAnual - deducciones) * 0.21;
  }
}
