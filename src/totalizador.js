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
  const estadosValidos = ["CA", "AL", "NV", "UT", "TX"];
  if (cantidad <= 0) return "Cantidad invalida";
  if (precio < 0) return "Precio invalido";
  if (estado && !estadosValidos.includes(estado)) return "Estado invalido";
  return null;
}

export function obtenerCantidad(cantidad) {
  return cantidad;
}
export function obtenerPrecio(precio) {
  return precio;
}


export function calcularTotalizador(cantidad, precio, estado = "") {
  const error = validarEntradas(cantidad, precio, estado);
  if (error) return error;

  const precioNeto = calcularPrecioNeto(cantidad, precio);
  const descuento = calcularDescuento(precioNeto);
  const impuesto = calcularImpuesto(precioNeto, estado);

  const tasasImpuesto = { CA: 8.25, AL: 4.0, NV: 8.0, UT: 6.65, TX: 6.25 };
  const porcentajeImpuesto = tasasImpuesto[estado] || 0;

  let porcentajeDescuento = 0;
  if (precioNeto >= 30000) porcentajeDescuento = 15;
  else if (precioNeto >= 10000) porcentajeDescuento = 10;
  else if (precioNeto >= 7000) porcentajeDescuento = 7;
  else if (precioNeto >= 3000) porcentajeDescuento = 5;
  else if (precioNeto >= 1000) porcentajeDescuento = 3;

  const total = Number((precioNeto - descuento + impuesto).toFixed(2));

  return {
    cantidad,
    precio,
    precioNeto,
    descuento,
    porcentajeDescuento,
    impuesto,
    porcentajeImpuesto,
    estado,
    total,
  };
  
}
export function obtenerEstadoPorDefecto(estado) {
  return estado && estado.trim() !== "" ? estado : "CA";
}
export function obtenerCategoriaPorDefecto(categoria) {
  return categoria && categoria.trim() !== "" ? categoria : "Varios";
}

export function obtenerDescuentoCategoria(categoria = "Varios") {
  const descuentos = {
    "Alimentos": 0.02,
    "Material de escritorio": 0.015,
    "Electronicos": 0.01,
  };
  return descuentos[categoria] || 0;
}

export function obtenerImpuestoCategoria(categoria = "Varios") {
  const impuestos = {
    "Bebidas alcoholicas": 0.07,
    "Muebles": 0.03,
    "Electronicos": 0.04,
    "Vestimenta": 0.02,
  };
  return impuestos[categoria] || 0;
}
export function calcularCostoEnvio(pesoVolumetrico, cantidad) {
  if (pesoVolumetrico <= 10) {
    return 0;
  }
  if (pesoVolumetrico >= 11 && pesoVolumetrico <= 20) {
    return 3.5 * cantidad;
  }
  if (pesoVolumetrico >= 21 && pesoVolumetrico <= 40) {
    return 5 * cantidad;
  }
  if (pesoVolumetrico >= 41 && pesoVolumetrico <= 80) {
    return 6 * cantidad;
  }
  return 0;
}