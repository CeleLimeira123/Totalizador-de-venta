import { obtenerDetalleCompra, validarDatosCompra, obtenerEstadoPorDefecto, obtenerCategoriaPorDefecto, obtenerClientePorDefecto } from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoSelect = document.querySelector("#estado");
const categoriaSelect = document.querySelector("#categoria");
const pesoInput = document.querySelector("#peso");
const tipoClienteSelect = document.querySelector("#tipoCliente");
const botonTotalizar = document.querySelector("#totalizar-btn");
const divResultado = document.querySelector("#resultado-div");

botonTotalizar.addEventListener("click", () => {
  const cantidadVal = cantidadInput.value;
  const precioVal = precioInput.value;

  const errorValidacion = validarDatosCompra(precioVal, cantidadVal);
  if (errorValidacion) {
    divResultado.innerHTML = `<p style="color: red;"><b>Error:</b> ${errorValidacion}</p>`;
    return;
  }

  const cantidad = Number(cantidadVal);
  const precio = Number(precioVal);
  const estado = obtenerEstadoPorDefecto(estadoSelect.value);
  const categoria = obtenerCategoriaPorDefecto(categoriaSelect.value);
  const peso = Number(pesoInput.value || 0);
  const tipoCliente = obtenerClientePorDefecto(tipoClienteSelect.value);

  const detalle = obtenerDetalleCompra(precio, cantidad, estado, categoria, peso, tipoCliente);

  divResultado.innerHTML = `
    <p><span>Precio Neto:</span> <span>$${(precio * cantidad).toFixed(2)}</span></p>
    <p><span>Estado:</span> <span>${estado}</span></p>
    <p><span>Categoría:</span> <span>${categoria}</span></p>
    <p><span>Cliente:</span> <span>${tipoCliente}</span></p>
    <p><span>Descuentos:</span> <span style="color: green;">-$${detalle.totalDescuentos.toFixed(2)}</span></p>
    <p><span>Impuestos:</span> <span style="color: red;">+$${detalle.totalImpuestos.toFixed(2)}</span></p>
    <p><span>Envío:</span> <span>+$${detalle.costoEnvioFinal.toFixed(2)}</span></p>
    <div class="total-line">
      <p><span>Total Final:</span> <span>$${detalle.precioTotal.toFixed(2)}</span></p>
    </div>
  `;
});