import type { FacturaData } from "@/types/factura";

export const initalFacturaData: FacturaData = {
    numeroFactura: `INV-${Date.now()}`,
    data: new Date().toISOString().split("T") [0],
    empresa: "",
    empresaNuit: "",
    empresaEmail: "",
    empresaContacto: "",
    empresaEndereco: "",
    cliente: "",
    clienteNuit: "",
    clienteContacto: "",
    items: [{id: "1", descricao: "", quantidade: 1, precoUnitario: 0, valor: 0}],
    taxaImposto: 10,
    subtotal: 0,
    taxaValor: 0,
    total: 0,
}