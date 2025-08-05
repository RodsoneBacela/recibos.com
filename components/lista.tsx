import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ReciboLista from "./recibo-lista";
import { useFactura } from "@/context/factura-context";

export default function Lista() {
  const { factura, addItem } = useFactura();

  return (
    <div>
      <Card className="rounded-lg shadow-sm border border-neutral-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-light text-neutral-800 tracking-tight">
            Produtos e Servicos Prestados
          </CardTitle>
          <Button
            onClick={addItem}
            size="sm"
            className="bg-black text-white hover:bg-neutral-800 transition"
          >
            <Plus className="w-4 h-4 mr-1" />
            Adicionar
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {factura.items.map((item, index) => (
            <ReciboLista
              key={item.id}
              item={item}
              index={index}
              canRemove={factura.items.length > 1}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
