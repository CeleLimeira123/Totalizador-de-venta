import { calcularPrecioNeto } from "./totalizador";

describe("Totalizador de Ventas - Precio Neto", () => {
  it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });
});