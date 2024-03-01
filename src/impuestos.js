export class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  set montoBrutoAnual(value) {
    if (value < 0)
      throw new Error("El monto bruto anual debe ser mayor a cero.");
    this._montoBrutoAnual = value;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(value) {
    if (value < 0) throw new Error("Las deducciones deben ser mayor a cero.");
    this._deducciones = value;
  }
}
