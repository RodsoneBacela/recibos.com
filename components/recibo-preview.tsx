import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {  } from "./lista";
import { useFactura } from "@/context/factura-context";
import { dataFormato } from "@/utils/formatter";


interface FacturaPreviewProps {
  onBack: () => void;
}


export default function ReciboPreview({onBack}: FacturaPreviewProps) {

  const  {factura} = useFactura();


  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">pré-visualização da Fatura</h1>
          <div className="space-x-2">
            <Button variant="outline" onClick={onBack}>
              Voltar para editar
            </Button>
            <Button >
              <Download className="w-4 h-4 mr-2"/>
              Baixar PDF
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            {/*Invoice Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Factura</h1>
                <p className="text-gray-600">#{factura.numeroFactura}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Data: {dataFormato(factura.data)}</p>
              </div>
            </div>

            {/** Detlahes cliente */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Emitente: </h3>
                <p className="font-medium">{factura.empresa}</p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Nuit: </span>
                   {factura.empresaNuit}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Contacto: </span>
                  {factura.empresaContacto}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Endereco: </span>
                  {factura.empresaEndereco}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cliente: </h3>
                <p className="font-medium">{factura.cliente}</p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Nuit: </span>
                   {factura.clienteNuit}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Contacto: </span>
                  {factura.clienteContacto}</p>
              </div>
            </div>

            {/** Tabelas */}
            <table className="w-full mb-8">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Descricao</th>
                  <th className="text-center py-2">Quantidade</th>
                  <th className="text-right py-2">Preco</th>
                  <th className="text-right py-2">Valor</th>
                </tr>
              </thead>
              <tbody>
                {factura.items.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.descricao}</td>
                    <td className="py-2 text-center">{item.quantidade}</td>
                    <td className="py-2 text-right">
                      {typeof item.precoUnitario === "number"
                        ? item.precoUnitario.toFixed(2)
                        : "0.00"
                      }
                      Mzn
                    </td>
                    <td className="py-2 text-right">
                      {typeof item.valor === "number"
                        ? item.valor.toFixed(2)
                        : "0.00"
                      }
                      Mzn
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/** total */}
            <div className="flex justify-end">
              <div className="w-64 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{factura.subtotal.toFixed(2)} Mzn</span>
                </div>
                <div className="flex justify-between">
                  <span>IVA ({factura.taxaImposto === "number" ? factura.taxaImposto: 0}%)</span>
                  <span>{factura.taxaValor} Mzn</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>{factura.total} Mzn</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
