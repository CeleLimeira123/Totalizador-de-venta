export function calcularPrecioNeto(cantidad, precio) {
  return cantidad * precio;
}

export function calcularImpuesto(precioNeto, estado) {
  const tasasImpuestoEstatal = {
    CA: 0.0825,
    AL: 0.0400,
    NV: 0.0800,
    UT: 0.0665,
    TX: 0.0625,
  };

  const tasa = tasasImpuestoEstatal[estado] || 0;
  return Number((precioNeto * tasa).toFixed(2));
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
  if (pesoVolumetrico >= 81 && pesoVolumetrico <= 100) {
    return 6.5 * cantidad;
  }
  if (pesoVolumetrico >= 101 && pesoVolumetrico <= 200) {
    return 8 * cantidad;
  }
 return 9 * cantidad;
}

export function obtenerClientePorDefecto(tipoCliente) {
  return tipoCliente && tipoCliente.trim() !== "" ? tipoCliente : "Normal";
}

export function aplicarDescuentoEnvioCliente(costoEnvio, tipoCliente = "Normal") {
  const descuentosEnvio = {
    "Recurrente": 0.005,
    "Antiguo Recurrente": 0.015,
    "Especial": 0.03,
  };
  const descuento = descuentosEnvio[tipoCliente] || 0;
  return costoEnvio * (1 - descuento);
}

export function aplicarDescuentoEspecialCategoria(tipoCliente, categoria, montoTotal) {
  if (tipoCliente === "Recurrente" && categoria === "Alimentos" && montoTotal >= 3000) {
    return 100;
  }
  if (tipoCliente === "Especial" && categoria === "Electronicos" && montoTotal >= 5000) {
    return 150;
  }
  return 0;
}

export function calcularPrecioTotal(precioItem, cantidad, estado, categoria, pesoVolumetrico, tipoCliente) {
  const subtotal = precioItem * cantidad;
  const descuentoCat = obtenerDescuentoCategoria(categoria);
  const impuestoCat = obtenerImpuestoCategoria(categoria);
  
  const montoConDescuento = subtotal * (1 - descuentoCat);
  const montoConImpuesto = montoConDescuento * (1 + impuestoCat);
  
  const envioBase = calcularCostoEnvio(pesoVolumetrico, cantidad);
  const envioFinal = aplicarDescuentoEnvioCliente(envioBase, tipoCliente);
  
  const descuentoEspecial = aplicarDescuentoEspecialCategoria(tipoCliente, categoria, montoConImpuesto);

  const totalFinal = montoConImpuesto + envioFinal - descuentoEspecial;
  return Number(totalFinal.toFixed(2));
}

export function validarDatosCompra(precioItem, cantidad) {
  if (precioItem === null || precioItem === undefined || precioItem === "" ||
      cantidad === null || cantidad === undefined || cantidad === "") {
    return "Faltan datos obligatorios para calcular la compra";
  }
  return "";
}


export function obtenerDetalleCompra(precioItem, cantidad, estado, categoria, pesoVolumetrico, tipoCliente) {
  const subtotal = calcularPrecioNeto(cantidad, precioItem);
  
  // Usamos tu función calcularDescuento ya existente
  const descuentoMonto = calcularDescuento(subtotal);
  const porcentajeDescCat = obtenerDescuentoCategoria(categoria);
  const descuentoCatMonto = subtotal * porcentajeDescCat;
  const totalDescuentos = descuentoMonto + descuentoCatMonto;

  const subtotalConDescuento = subtotal - totalDescuentos;

  // Usamos tu función calcularImpuesto ya existente (pasándole el subtotal con descuento)
  const impuestoEstatalMonto = calcularImpuesto(subtotalConDescuento, estado);
  const impuestoCatMonto = subtotalConDescuento * obtenerImpuestoCategoria(categoria);
  
  const totalImpuestos = impuestoEstatalMonto + impuestoCatMonto;
  const montoConImpuesto = subtotalConDescuento + totalImpuestos;
  
  const envioBase = calcularCostoEnvio(pesoVolumetrico, cantidad);
  const envioFinal = aplicarDescuentoEnvioCliente(envioBase, tipoCliente);
  const descuentoEspecial = aplicarDescuentoEspecialCategoria(tipoCliente, categoria, montoConImpuesto);

  const totalFinal = montoConImpuesto + envioFinal - descuentoEspecial;

  return {
    subtotal,
    totalImpuestos: Number(totalImpuestos.toFixed(2)),
    totalDescuentos: Number((totalDescuentos + descuentoEspecial).toFixed(2)),
    costoEnvioFinal: Number(envioFinal.toFixed(2)),
    precioTotal: Number(totalFinal.toFixed(2))
  };
}