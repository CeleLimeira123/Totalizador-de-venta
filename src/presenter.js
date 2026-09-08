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

  const res = calcularTotalizador(cantidad, precio, estado, categoria, peso, tipoCliente);

  if (typeof res === "string") {
    divResultado.innerHTML = `<p style="color: red;"><b>Error:</b> ${res}</p>`;
    return;
  }

  divResultado.innerHTML = `
    <p><span>Precio Neto:</span> <span>$${res.precioNeto.toFixed(2)}</span></p>
    <p><span>Estado:</span> <span>${res.estado}</span></p>
    <p><span>Categoría:</span> <span>${res.categoria}</span></p>
    <p><span>Cliente:</span> <span>${res.tipoCliente}</span></p>
    <p><span>Descuento (${res.porcentajeDescuento}%):</span> <span style="color: green;">-$${res.descuentoTotal.toFixed(2)}</span></p>
    <p><span>Impuesto (${res.porcentajeImpuesto}%):</span> <span style="color: red;">+$${res.impuestoTotal.toFixed(2)}</span></p>
    <p><span>Envío (${res.pesoVolumetrico} lb/u):</span> <span>+$${res.costoEnvio.toFixed(2)}</span></p>
    <div class="total-line">
      <p><span>Total Final:</span> <span>$${res.total.toFixed(2)}</span></p>
    </div>
  `;
});