import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input} from "./ui/input"
import { Label } from "./ui/label"

export default function DetalhesBasicos() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Recibo</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="reciboNr">Número do Recibo</Label>
            <Input id="reciboNr"/>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="reciboData">Data de Emissão</Label>
            <Input id="reciboData" type="date"/>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
