import { useFactura } from "@/context/factura-context";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function TotalETaxas() {
  const { factura, updateFactura } = useFactura();

  const handleTaxaImpostoChange = (value: string) => {
    if (value === "") {
      updateFactura({ taxaImposto: "" });
    } else {
      const numValue = Number.parseFloat(value);
      if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
        updateFactura({ taxaImposto: numValue });
      }
    }
  };

  const handleTaxaImpostoBlur = () => {
    if (factura.taxaImposto === "" || isNaN(Number(factura.taxaImposto))) {
      updateFactura({ taxaImposto: 0 });
    }
  };

  return (
    <div>
      <Card className="rounded-lg shadow-sm border border-neutral-200">
        <CardHeader>
          <CardTitle className="text-2xl font-light text-neutral-800 tracking-tight">
            Taxas e Total
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Label htmlFor="taxaImposto" className="text-sm text-neutral-600">
              Taxa de Imposto (%)
            </Label>
            <Input
              id="taxaImposto"
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={factura.taxaImposto}
              onChange={(e) => handleTaxaImpostoChange(e.target.value)}
              onBlur={handleTaxaImpostoBlur}
              className="bg-white text-neutral-800"
              placeholder="0"
            />
          </div>
          <div className="space-y-4 text-neutral-700">
            <div className="flex justify-between text-base">
              <span>Subtotal</span>
              <span>{factura.subtotal.toFixed(2)} Mzn</span>
            </div>
            <div className="flex justify-between text-base">
              <span>Taxa ({typeof factura.taxaImposto === "number" ? factura.taxaImposto : 0} %)</span>
              <span>{factura.taxaValor.toFixed(2)} Mzn</span>
            </div>
            <div className="flex justify-between font-semibold text-xl border-t border-neutral-300 pt-3">
              <span>Total</span>
              <span>{factura.total.toFixed(2)} Mzn</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
