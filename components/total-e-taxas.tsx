
import { useFactura } from "@/context/factura-context";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


export default function TotalETaxas() {

  const {factura, updateFactura} = useFactura();

   const handleTaxaImpostoChange = (value: string) => {
    if (value === "") {
      updateFactura({ taxaImposto: ""});
    } else {
      const numValue = Number.parseInt(value);
      if (!isNaN(numValue) && numValue >= 0) {
       updateFactura({taxaImposto: numValue })
      }
    }
  }

  const handleTaxaImpostoBlur = () => {
    if (factura.taxaImposto === "" || isNaN(Number(factura.taxaImposto))) {
      updateFactura({ taxaImposto: 0})
    }
  }

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
            <Input 
            id="taxaValor" 
            type="number" 
            min="0" 
            max="100" 
            step="0.01"
            value={factura.taxaImposto}
            onChange={(e) => handleTaxaImpostoChange(e.target.value)}
            onBlur={handleTaxaImpostoBlur}
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{factura.subtotal.toFixed(2)} Mzn</span>
            </div>
            <div className="flex justify-between">
              <span>
                Taxa ({typeof factura.taxaImposto === "number" ? factura.taxaImposto: 0} %)
              </span>
              <span>{factura.taxaValor.toFixed(2)} Mzn</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>{factura.total.toFixed(2)} Mzn</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
