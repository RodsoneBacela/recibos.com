import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useFactura } from "@/context/factura-context";

export default function DetalhesBasicos() {
  const { factura, updateFactura } = useFactura();

  return (
    <div>
      <Card className="rounded-lg shadow-sm border border-neutral-200">
        <CardHeader>
          <CardTitle className="text-2xl font-light tracking-tight text-neutral-800">
            Detalhes do Recibo
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Número do Recibo */}
          <div className="space-y-2">
            <Label htmlFor="numeroFactura" className="text-sm text-neutral-600">
              Número do Recibo
            </Label>
            <Input
              id="numeroFactura"
              value={factura.numeroFactura}
              onChange={(e) => updateFactura({ numeroFactura: e.target.value })}
              placeholder="Ex: 001"
              className="bg-white text-neutral-800"
            />
          </div>

          {/* Data de Emissão */}
          <div className="space-y-2">
            <Label htmlFor="data" className="text-sm text-neutral-600">
              Data de Emissão
            </Label>
            <Input
              id="data"
              type="date"
              value={factura.data}
              onChange={(e) => updateFactura({ data: e.target.value })}
              className="bg-white text-neutral-800"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
