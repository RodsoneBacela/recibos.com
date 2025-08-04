"use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useFactura } from "@/context/factura-context";
import { dataFormato } from "@/utils/formatter";
import { gerarPDF } from "@/utils/gerador-de-pdf";

interface FacturaPreviewProps {
  onBack: () => void;
}

export default function ReciboPreview({ onBack }: FacturaPreviewProps) {
  const { factura } = useFactura();

  const handleBaixarPDF = () => {
    gerarPDF(factura);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Pré-visualização da Fatura
          </h1>
          <div className="space-x-2">
            <Button variant="outline" onClick={onBack}>
              Voltar para editar
            </Button>
            <Button onClick={handleBaixarPDF}>
              <Download className="w-4 h-4 mr-2" />
              Baixar PDF
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-8 bg-white rounded-md shadow-md">
            {/* Cabeçalho */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-black mb-2">Factura</h1>
                <p className="text-gray-700 font-semibold">
                  #{factura.numeroFactura}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  Data: {dataFormato(factura.data)}
                </p>
              </div>
            </div>

            {/* Detalhes Emitente e Cliente */}
            <div className="grid grid-cols-2 gap-8 mb-8 bg-gray-100 p-4 rounded border">
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Emitente:</h3>
                <p className="font-medium text-black">{factura.empresa}</p>
                <p className="text-gray-700">
                  <span className="font-semibold">Nuit:</span>{" "}
                  {factura.empresaNuit}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Contacto:</span>{" "}
                  {factura.empresaContacto}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Endereço:</span>{" "}
                  {factura.empresaEndereco}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Cliente:</h3>
                <p className="font-medium text-black">{factura.cliente}</p>
                <p className="text-gray-700">
                  <span className="font-semibold">Nuit:</span>{" "}
                  {factura.clienteNuit}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Contacto:</span>{" "}
                  {factura.clienteContacto}
                </p>
              </div>
            </div>

            {/* Tabela de Itens */}
            <table className="w-full mb-8">
              <thead className="bg-gray-200 text-gray-800">
                <tr className="border-b-2 border-gray-400">
                  <th className="text-left py-2 px-2">Descrição</th>
                  <th className="text-center py-2 px-2">Quantidade</th>
                  <th className="text-right py-2 px-2">Preço</th>
                  <th className="text-right py-2 px-2">Valor</th>
                </tr>
              </thead>
              <tbody>
                {factura.items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="py-2 px-2">{item.descricao}</td>
                    <td className="py-2 px-2 text-center">{item.quantidade}</td>
                    <td className="py-2 px-2 text-right">
                      {typeof item.precoUnitario === "number"
                        ? item.precoUnitario.toFixed(2)
                        : "0.00"}{" "}
                      Mzn
                    </td>
                    <td className="py-2 px-2 text-right">
                      {typeof item.valor === "number"
                        ? item.valor.toFixed(2)
                        : "0.00"}{" "}
                      Mzn
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totais */}
            <div className="flex justify-end">
              <div className="w-64 space-y-2 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>{factura.subtotal.toFixed(2)} Mzn</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>IVA ({typeof factura.taxaImposto === "number" ? factura.taxaImposto : 0}%)</span>
                  <span>{factura.taxaValor.toFixed(2)} Mzn</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2 text-black">
                  <span>Total</span>
                  <span>{factura.total.toFixed(2)} Mzn</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
