
import { calcularTotalizador } from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoSelect = document.querySelector("#estado");
const categoriaSelect = document.querySelector("#categoria");
const pesoInput = document.querySelector("#peso");
const tipoClienteSelect = document.querySelector("#tipoCliente");
const botonTotalizar = document.querySelector("#totalizar-btn");
const divResultado = document.querySelector("#resultado-div");

botonTotalizar.addEventListener("click", () => {
  const cantidad = Number(cantidadInput.value);
  const precio = Number(precioInput.value);
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value;
  const peso = Number(pesoInput.value);
  const tipoCliente = tipoClienteSelect.value;

  const resultado = calcularTotalizador(cantidad, precio, estado, categoria, peso, tipoCliente);

  if (typeof resultado === "string") {
    divResultado.innerHTML = `<p style="color: red; font-weight: bold;">Error: ${resultado}</p>`;
    return;
  }

  divResultado.innerHTML = `
    <p><strong>Cantidad de items:</strong> ${resultado.cantidad}</p>
    <p><strong>Precio por item:</strong> $${resultado.precio.toFixed(2)}</p>
    <p><strong>Precio Neto (${resultado.cantidad} * $${resultado.precio}):</strong> $${resultado.precioNeto.toFixed(2)}</p>
    <p><strong>Estado Seleccionado:</strong> ${resultado.estado}</p>
    <p><strong>Categoría de Producto:</strong> ${resultado.categoria}</p>
    <p><strong>Tipo de Cliente:</strong> ${resultado.tipoCliente}</p>
    <p><strong>Descuento Aplicado (${resultado.porcentajeDescuento}% + Fijos):</strong> -$${resultado.descuentoTotal.toFixed(2)}</p>
    <p><strong>Impuesto Aplicado (${resultado.porcentajeImpuesto}%):</strong> +$${resultado.impuestoTotal.toFixed(2)}</p>
    <p><strong>Costo de Envío (${resultado.pesoVolumetrico} lb/u):</strong> +$${resultado.costoEnvio.toFixed(2)}</p>
    <h3><strong>Precio Total:</strong> $${resultado.total.toFixed(2)}</h3>
  `;
});