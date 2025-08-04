import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import type {FacturaItem as FacturaItemType }  from "../types/factura";
import { useFactura } from "@/context/factura-context";
 
interface FacturaItemProps { 
  item :  FacturaItemType ; 
  index:  number ;
  canRemove :  boolean ;
}

export default function ReciboLista({
  item , 
  index, 
  canRemove} : FacturaItemProps) {
  const {removeItem, updateItem} = useFactura();


  return (
    <div className="grid grid-cols-12 gap-4 p-4 border rounded-lg ">
        <div className="col-span-5">
            <div className="flex flex-col gap-1">
              <Label >Description</Label>
              <Input 
              placeholder="Item Description"
              value={item.descricao}
              onChange={(e) => updateItem(index, "descricao", e.target.value)}
              />
            </div>
        </div>
        <div className="col-span-2">
            <div className="flex flex-col gap-1">
              <Label >Quantidade</Label>
              <Input 
              type="number" 
              min="1"
              value={item.quantidade}
              onChange={(e) => updateItem(index, "quantidade", e.target.value)}
              />
            </div>
        </div>
        <div className="col-span-2">
            <div className="flex flex-col gap-1">
              <Label >Taxa ($)</Label>
              <Input 
              type="number" 
              min="0" 
              step="0.01"
              value={item.taxa}
              onChange={(e) => updateItem(index, "taxa", e.target.value)}
              />
            </div>
        </div>
        <div className="col-span-2">
            <div className="flex flex-col gap-1">
              <Label >Preco</Label>
              <div className="h-9 px-3 py-1 bg-gray-50 border rounded-md flex items-center">
                0.00 Mzn
              </div>
            </div>
        </div>
        <div className="col-span-1 flex items-end">
            <Button 
            variant="outline"
            size="icon"
            onClick={() => removeItem(index)}
            disabled={!canRemove}
            >
              <Trash className="w-4 h-4"/>
            </Button>
        </div>
    </div>
  )
}
