import { calcularPrecioNeto, calcularImpuesto, calcularDescuento } from "./totalizador";

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
    it("deberia calcular el impuesto de 6.25% para TX", () => {
    expect(calcularImpuesto(60, "TX")).toEqual(3.75);
    });

    describe("Totalizador de Ventas - Descuentos", () => {
    it("deberia aplicar 3% de descuento a partir de 1000", () => {
        expect(calcularDescuento(1000)).toEqual(30);
    });
    });
    it("deberia aplicar 5% de descuento a partir de 3000", () => {
    expect(calcularDescuento(3000)).toEqual(150);
    });
    it("deberia aplicar 7% de descuento a partir de 7000", () => {
    expect(calcularDescuento(7000)).toEqual(490);
    });
});