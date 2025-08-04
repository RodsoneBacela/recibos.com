import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


export default function TotalETaxas() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            Taxas e Total
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="taxaImposto">Taxa de Imposto (%)</Label>
            <Input id="taxaImposto" type="number" min="0" max="100" step="0.01"/>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>5000 Mzn</span>
            </div>
            <div className="flex justify-between">
              <span>Taxa (5%)</span>
              <span>250 Mzn</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>5250 Mzn</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
