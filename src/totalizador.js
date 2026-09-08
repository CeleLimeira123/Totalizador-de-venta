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
export function calcularDescuento(monto) {
  let descuento = 0;
  if (monto >= 30000) descuento = monto * 0.15;
  else if (monto >= 10000) descuento = monto * 0.10;
  else if (monto >= 7000) descuento = monto * 0.07;
  else if (monto >= 3000) descuento = monto * 0.05;
  else if (monto >= 1000) descuento = monto * 0.03;
  
  return Number(descuento.toFixed(2));
}

export function validarEntradas(cantidad, precio, estado) {
  if (cantidad <= 0) {
    return "Cantidad invalida";
  }
  return null;
}