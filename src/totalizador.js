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
  return 0;
}