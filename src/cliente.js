import { Impuestos } from "./impuestos";

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
    if (!this._impuesto) throw new Error("No sé ha definido el impuesto aún");

    const { montoBrutoAnual, deducciones } = this._impuesto;
    if (deducciones > montoBrutoAnual) {
      return "Queda exonerado de Impuestos Anuales";
    }

    return (montoBrutoAnual - deducciones) * 0.21;
  }
}
