"use client"

import { initalFacturaData } from "@/lib/constant"
import { FacturaData, FacturaItem } from "@/types/factura"
import { TotalCalculado } from "@/utils/calculos"
import { createContext, ReactNode, useContext, useState } from "react"

interface  FacturaContextType {
    factura: FacturaData
    updateFactura: (updates: Partial<FacturaData>) => void;
    addItem: () => void ;
    removeItem: (index: number) => void;
    updateItem: (
        index: number,
        field: keyof FacturaItem,
        value: string | number
    ) => void;
}


const FacturaContext = createContext<FacturaContextType | undefined>(undefined)

export function FacturaProvider( {children} : {children: ReactNode} ) {

    const [factura, setFactura] = useState<FacturaData>(initalFacturaData);

    const updateFactura = (updates: Partial<FacturaData>) => {
        const novaFactura = {...factura, ...updates};

        if(updates.items || updates.taxaImposto !== undefined) {
            const {subtotal, taxaValor, total} = TotalCalculado(
                updates.items || factura.items,
                updates.taxaImposto !== undefined ? updates.taxaImposto : factura.taxaImposto
            );
            novaFactura.subtotal = subtotal;
            novaFactura.taxaValor = taxaValor;
            novaFactura.total = total;
        }
        setFactura(novaFactura);
    }

    const addItem = () => {
        const novoItem: FacturaItem = {
            id: Date.now().toString(),
            descricao: "",
            quantidade: 1,
            precoUnitario: 0,
            valor: 0,
        };
        updateFactura({ items: [...factura. items , novoItem]})
    }

    const removeItem = (index: number) => {
        if (factura.items.length > 1) {
            const novoItems = factura.items.filter((_, i) => i !== index);
            updateFactura({items: novoItems})
        }
    }

    const updateItem  = (
        index: number,
        field: keyof FacturaItem,
        value: string | number
    ) => {
        const novoItems = [...factura.items];
        novoItems[index] = {...novoItems[index], [field]: value}

        if (field === "quantidade" || field === "precoUnitario") {

            const valorQuantidade = novoItems[index].quantidade;
            const valorPrecoUnitario = novoItems[index].precoUnitario;

            let quantidade: number;
            if (typeof valorQuantidade === "string") {
                quantidade = valorQuantidade === "" ? 0 : Number(valorQuantidade);
            } else {
                quantidade = valorQuantidade
            }

            let taxa: number;
            if (typeof valorPrecoUnitario === "string") {
                taxa = valorPrecoUnitario === "" ? 0 : Number(valorPrecoUnitario);
            } else {
                taxa = valorPrecoUnitario
            }

            novoItems[index].valor = quantidade * taxa
        }


        updateFactura({ items: novoItems});
    }

    return (
    <FacturaContext.Provider value={{factura, updateFactura, addItem, removeItem, updateItem}}>
        {children}
    </FacturaContext.Provider>)
}


export function useFactura() {
    const context = useContext(FacturaContext);
    if (context === undefined) {
        throw new Error("factura deve ser usada dentro de um FacturaProvider")
    }
    return context;
}
