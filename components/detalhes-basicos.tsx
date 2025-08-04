import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input} from "./ui/input"
import { Label } from "./ui/label"
import { useFactura } from "@/context/factura-context"

export default function DetalhesBasicos() {

  const {factura, updateFactura}= useFactura();
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Recibo</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="numeroFactura">Número do Recibo</Label>
            <Input 
              value={factura.numeroFactura}
              onChange={(e) => updateFactura({ numeroFactura: e.target.value})} 
              id="numeroFactura"/>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="data">Data de Emissão</Label>
            <Input 
              value={factura.data}
              onChange={(e) => updateFactura({ data: e.target.value})} 
              id="data" 
              type="date"/>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
