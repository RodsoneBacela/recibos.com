import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import type { FacturaItem as FacturaItemType } from "../types/factura";
import { useFactura } from "@/context/factura-context";

interface FacturaItemProps {
  item: FacturaItemType;
  index: number;
  canRemove: boolean;
}

export default function ReciboLista({
  item,
  index,
  canRemove,
}: FacturaItemProps) {
  const { removeItem, updateItem } = useFactura();

  const handleQuantidadeChange = (value: string) => {
    if (value === "") {
      updateItem(index, "quantidade", "");
    } else {
      const numValue = Number.parseInt(value);
      if (!isNaN(numValue) && numValue >= 0) {
        updateItem(index, "quantidade", numValue);
      }
    }
  };

  const handleQuantidadeBlur = () => {
    if (item.quantidade === "" || item.quantidade === 0) {
      updateItem(index, "quantidade", 1);
    }
  };

  const handleTaxaChange = (value: string) => {
    if (value === "") {
      updateItem(index, "precoUnitario", "");
    } else {
      const numValue = Number.parseInt(value);
      if (!isNaN(numValue) && numValue >= 0) {
        updateItem(index, "precoUnitario", numValue);
      }
    }
  };

  const handleTaxaBlur = () => {
    if (item.precoUnitario === "" || item.precoUnitario === 0) {
      updateItem(index, "precoUnitario", 0);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4 p-4 border rounded-lg">
      <div className="md:col-span-3 lg:col-span-5">
        <div className="flex flex-col gap-1">
          <Label>Descrição</Label>
          <Input
            placeholder="Item Description"
            value={item.descricao}
            onChange={(e) => updateItem(index, "descricao", e.target.value)}
          />
        </div>
      </div>

      <div className="md:col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-1">
          <Label>Quantidade</Label>
          <Input
            type="number"
            min="1"
            value={item.quantidade}
            onChange={(e) => handleQuantidadeChange(e.target.value)}
            onBlur={handleQuantidadeBlur}
          />
        </div>
      </div>

      <div className="md:col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-1">
          <Label>Preço Unitário</Label>
          <Input
            type="number"
            min="0"
            step="0.01"
            value={item.precoUnitario}
            onChange={(e) => handleTaxaChange(e.target.value)}
            onBlur={handleTaxaBlur}
          />
        </div>
      </div>

      <div className="md:col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-1">
          <Label>Valor</Label>
          <div className="h-9 px-3 py-1 bg-gray-50 border rounded-md flex items-center">
            {typeof item.valor === "number"
              ? item.valor.toFixed(2)
              : "0.00"}{" "}
            Mzn
          </div>
        </div>
      </div>

      <div className="flex items-end md:col-span-1">
        <Button
          variant="outline"
          size="icon"
          onClick={() => removeItem(index)}
          disabled={!canRemove}
        >
          <Trash className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
