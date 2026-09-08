import { calcularPrecioNeto, calcularImpuesto } from "./totalizador";

describe("Totalizador de Ventas - Precio Neto", () => {
  it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });
});

describe("Totalizador de Ventas - Impuestos", () => {
  it("deberia calcular el impuesto de 8.25% para CA", () => {
    expect(calcularImpuesto(60, "CA")).toEqual(4.95);
  });
});