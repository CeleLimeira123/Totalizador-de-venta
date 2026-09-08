import { obtenerCantidad,calcularPrecioNeto, calcularImpuesto, calcularDescuento, validarEntradas } from "./totalizador";

    describe("Totalizador de Ventas - Entradas y Precio Neto", () => {
    it("deberia obtener la cantidad ingresada", () => {
        expect(obtenerCantidad(20)).toEqual(20);
    });
    });

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
    it("deberia aplicar 10% de descuento a partir de 10000", () => {
    expect(calcularDescuento(10000)).toEqual(1000);
    });
    it("deberia aplicar 15% de descuento a partir de 30000", () => {
    expect(calcularDescuento(30000)).toEqual(4500);
    });

    describe("Totalizador de Ventas - Validaciones", () => {
    it("deberia retornar error por cantidad negativa o cero", () => {
        expect(validarEntradas(-5, 10, "CA")).toEqual("Cantidad invalida");
        expect(validarEntradas(0, 10, "CA")).toEqual("Cantidad invalida");
    });
    });
    it("deberia retornar error por precio negativo", () => {
    expect(validarEntradas(5, -10, "CA")).toEqual("Precio invalido");
    });
    it("deberia retornar error por codigo de estado invalido", () => {
    expect(validarEntradas(5, 10, "XX")).toEqual("Estado invalido");
    });
});