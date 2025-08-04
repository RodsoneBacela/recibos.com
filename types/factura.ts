export interface FacturaItem {
    id: string
    descricao : string
    quantidade: number | string
    taxa: number | string
    preco: number
}

export interface FacturaData {
    numeroFactura: string
    data: string
    empresa: string
    empresaNuit: number | string
    empresaEmail: string
    empresaContacto: number | string
    empresaEndereco: string
    cliente: string
    clienteNuit: number | string
    clienteContacto: number | string
    items: FacturaItem[]
    taxaImposto: number | string
    subtotal: number
    taxaValor: number
    total: number
}