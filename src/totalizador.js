export function calcularPrecioNeto(cantidad, precio) {
  return cantidad * precio;
}

export function calcularImpuesto(precioNeto, estado) {
  if (estado === "CA") {
    return Number((precioNeto * 0.0825).toFixed(2));
  }
  if (estado === "AL") {
    return Number((precioNeto * 0.0400).toFixed(2));
  }
  if (estado === "NV") {
    return Number((precioNeto * 0.0800).toFixed(2));
  }
  if (estado === "UT") {
    return Number((precioNeto * 0.0665).toFixed(2));
  }
  if (estado === "TX") {
    return Number((precioNeto * 0.0625).toFixed(2));
  }
  return 0;
}