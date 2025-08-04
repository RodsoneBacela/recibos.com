import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {  } from "./lista";


export default function ReciboPreview() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">pré-visualização da Fatura</h1>
          <div className="space-x-2">
            <Button variant="outline" >
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
                <p className="text-gray-600">#24697592783</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Data: 08/08/2025</p>
              </div>
            </div>

            {/** Detlahes cliente */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Emitente: </h3>
                <p className="font-medium">RServicos</p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Nuit: </span>
                   6764582
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Contacto: </span>
                  +25884123456789
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Endereco: </span>
                  av.24 de JUlho, cidade de Maputo
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cliente: </h3>
                <p className="font-medium">TConsulting</p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Nuit: </span>
                   6764582
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Contacto: </span>
                  85252874</p>
              </div>
            </div>

            {/** Tabelas */}
            <table className="w-full mb-8">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Descricao</th>
                  <th className="text-center py-2">Quantidade</th>
                  <th className="text-right py-2">Taxa</th>
                  <th className="text-right py-2">Preco</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.description}</td>
                    <td className="py-2 text-center">{item.quantidade}</td>
                    <td className="py-2 text-right">
                      {typeof item.taxa === "number"
                        ? item.taxa.toFixed(2)
                        : "0.00"
                      }
                      Mzn
                    </td>
                    <td className="py-2 text-right">
                      {typeof item.preco === "number"
                        ? item.preco.toFixed(2)
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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
