import type {FacturaItem }  from "../types/factura";

export const TotalCalculado = (items: FacturaItem[], taxaImposto: number | string) => {
    const subtotal = items.reduce((sum, item) => {
        const valor = typeof item.valor === "number" ? item.valor : 0
        return sum + valor
    }, 0)

    const precoUnitario = typeof taxaImposto === "number" ? taxaImposto: taxaImposto === "" ? 0 : Number(taxaImposto)
    const taxaValor = (subtotal * precoUnitario) /100
    const total = subtotal + taxaValor

    return {subtotal, taxaValor, total}
}