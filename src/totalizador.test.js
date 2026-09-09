import {
     obtenerCantidad,
     obtenerPrecio,
     calcularPrecioNeto, 
     calcularImpuesto,
      calcularDescuento,
     validarEntradas,
     calcularTotalizador,
      obtenerEstadoPorDefecto,
    obtenerCategoriaPorDefecto,
    obtenerDescuentoCategoria,
    obtenerImpuestoCategoria} from "./totalizador";

    describe("Totalizador de Ventas - Entradas y Precio Neto", () => {
    it("deberia obtener la cantidad ingresada", () => {
        expect(obtenerCantidad(20)).toEqual(20);
    });
    it("deberia obtener el precio por item ingresado", () => {
    expect(obtenerPrecio(3)).toEqual(3);
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
    
    describe("Totalizador de Ventas - Integracion", () => {
    it("deberia calcular el impuesto sobre el precio neto independientemente del descuento", () => {
        const resultado = calcularTotalizador(100, 100, "TX");
        expect(resultado.impuesto).toEqual(625);
        expect(resultado.total).toEqual(9625);
    });
    });
   it("deberia retornar el desglose completo con descuento e impuesto aplicados", () => {
    expect(calcularTotalizador(100, 10, "TX")).toEqual({
      cantidad: 100,
      precio: 10,
      precioNeto: 1000,
      descuento: 30,
      porcentajeDescuento: 3,
      impuesto: 62.5,
      porcentajeImpuesto: 6.25,
      estado: "TX",
      total: 1032.5,
    });
    });
    describe("Estado por defecto", () => {
    it("deberia asignar CA como estado por defecto si no se selecciona ninguno", () => {
        expect(obtenerEstadoPorDefecto()).toEqual("CA");
        expect(obtenerEstadoPorDefecto("")).toEqual("CA");
    });

    it("deberia mantener el estado seleccionado si el usuario ingresa uno", () => {
        expect(obtenerEstadoPorDefecto("TX")).toEqual("TX");
    });
    });

    describe("Categoria por defecto", () => {
    it("deberia asignar Varios como categoria por defecto si no se selecciona ninguna", () => {
    expect(obtenerCategoriaPorDefecto()).toEqual("Varios");
    expect(obtenerCategoriaPorDefecto("")).toEqual("Varios");
     });
     it("deberia mantener la categoria seleccionada si el usuario ingresa una", () => {
    expect(obtenerCategoriaPorDefecto("Alimentos")).toEqual("Alimentos");
     });
    });

    describe("Descuentos por Categoria", () => {
    it("deberia aplicar 2% de descuento adicional para la categoria Alimentos", () => {
        expect(obtenerDescuentoCategoria("Alimentos")).toEqual(0.02);
    });
    });
    describe("Impuesto por Categoria", () => {
    it("deberia aplicar 7% de impuesto adicional para la categoria Bebidas alcoholicas", () => {
        expect(obtenerImpuestoCategoria("Bebidas alcoholicas")).toEqual(0.07);
    });
    it("deberia aplicar 3% de impuesto adicional para la categoria Muebles", () => {
    expect(obtenerImpuestoCategoria("Muebles")).toEqual(0.03);
    });
    it("deberia aplicar 4% de impuesto adicional para la categoria Electronicos", () => {
    expect(obtenerImpuestoCategoria("Electronicos")).toEqual(0.04);
    });
    });

    
    describe("Descuento por Categoria", () => {
    it("deberia aplicar 1.5% de descuento adicional para la categoria Material de escritorio", () => {
        expect(obtenerDescuentoCategoria("Material de escritorio")).toEqual(0.015);
    });
    
    });
});