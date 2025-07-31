import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ReciboLista from "./recibo-lista";

export const items = [
  {
    id: "1",
    description: "criacao de logo",
    quantidade: 1,
    rate: 500,
    preco: 400,
  },
  {
    id: "2",
    description: "criacao de website",
    quantidade: 1,
    rate: 5000,
    preco: 5000,
  }
]

export default function Lista() {

  const addItem = () => {}
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
          {items.map((item, index) => (
            <ReciboLista 
              key={item.id}
              item={item} 
              index={index}
              canRemove= {items.length > 1}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
