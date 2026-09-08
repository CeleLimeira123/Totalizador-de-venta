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
  it("deberia calcular el impuesto de 4.00% para AL", () => {
  expect(calcularImpuesto(60, "AL")).toEqual(2.40);
});
it("deberia calcular el impuesto de 8.00% para NV", () => {
  expect(calcularImpuesto(60, "NV")).toEqual(4.80);
});
it("deberia calcular el impuesto de 6.65% para UT", () => {
  expect(calcularImpuesto(60, "UT")).toEqual(3.99);
});
});