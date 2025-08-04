import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ReciboLista from "./recibo-lista";
import { useFactura } from "@/context/factura-context";


export default function Lista() {
  const {factura, addItem} = useFactura()

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Descrição do Serviço ou Produto Prestado</CardTitle>
          <Button onClick={addItem} size="sm">
            <Plus className="w-4 h-4 mr-2"/>
            Adicionar
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {factura.items.map((item, index) => (
            <ReciboLista 
              key={item.id}
              item={item} 
              index={index}
              canRemove= {factura.items.length > 1}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
