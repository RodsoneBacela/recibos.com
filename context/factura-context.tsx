"use client"

import { initalFacturaData } from "@/lib/constant"
import { FacturaData, FacturaItem } from "@/types/factura"
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
        const novaFactura = {...factura, ...updates}
        setFactura(novaFactura);
    }

    const addItem = () => {
        const novoItem: FacturaItem = {
            id: Date.now().toString(),
            descricao: "",
            quantidade: 1,
            taxa: 0,
            preco: 0,
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
        const novoItems = [...factura.items]
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
