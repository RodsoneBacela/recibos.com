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
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl font-light text-gray-900">
            Pré-visualização da Fatura
          </h1>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <Button variant="outline" onClick={onBack} className="w-full md:w-auto">
              Voltar para editar
            </Button>
            <Button onClick={handleBaixarPDF} className="flex items-center w-full md:w-auto">
              <Download className="w-5 h-5 mr-2" />
              Baixar PDF
            </Button>
          </div>
        </div>

        {/* Cartão de pré-visualização */}
        <Card className="rounded-lg shadow-md border border-neutral-200">
          <CardContent className="p-4 md:p-8 bg-white rounded-lg">
            {/* Título e Data */}
            <div className="flex flex-col md:flex-row justify-between mb-8 gap-2">
              <div>
                <h2 className="text-3xl font-semibold text-black mb-1">Factura</h2>
                <p className="text-gray-700 font-medium">#{factura.numeroFactura}</p>
              </div>
              <div className="text-gray-600 md:text-right">
                <p>Data: {dataFormato(factura.data)}</p>
              </div>
            </div>

            {/* Emitente e Cliente */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-gray-100 p-4 md:p-6 rounded border border-gray-300">
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Emitente:</h3>
                <p className="font-medium text-black">{factura.empresa}</p>
                <p className="text-gray-700">
                  <span className="font-semibold">Nuit:</span> {factura.empresaNuit || "-"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Contacto:</span> {factura.empresaContacto || "-"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Endereço:</span> {factura.empresaEndereco || "-"}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Cliente:</h3>
                <p className="font-medium text-black">{factura.cliente}</p>
                <p className="text-gray-700">
                  <span className="font-semibold">Nuit:</span> {factura.clienteNuit || "-"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Contacto:</span> {factura.clienteContacto || "-"}
                </p>
              </div>
            </div>

            {/* Tabela de itens */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead className="bg-gray-200 text-gray-800 text-sm md:text-base">
                  <tr className="border-b-2 border-gray-400">
                    <th className="text-left py-2 px-3">Descrição</th>
                    <th className="text-center py-2 px-3">Qtd</th>
                    <th className="text-right py-2 px-3">Preço</th>
                    <th className="text-right py-2 px-3">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {factura.items.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 text-sm md:text-base">
                      <td className="py-2 px-3">{item.descricao}</td>
                      <td className="py-2 px-3 text-center">{item.quantidade}</td>
                      <td className="py-2 px-3 text-right">
                        {typeof item.precoUnitario === "number"
                          ? item.precoUnitario.toFixed(2)
                          : "0.00"} Mzn
                      </td>
                      <td className="py-2 px-3 text-right">
                        {typeof item.valor === "number"
                          ? item.valor.toFixed(2)
                          : "0.00"} Mzn
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totais */}
            <div className="flex justify-end">
              <div className="w-full md:w-64 space-y-2 text-sm text-gray-700">
                <div className="flex justify-between text-base">
                  <span>Subtotal</span>
                  <span>{factura.subtotal.toFixed(2)} Mzn</span>
                </div>
                <div className="flex justify-between text-base">
                  <span>IVA ({factura.taxaImposto ?? 0}%)</span>
                  <span>{factura.taxaValor.toFixed(2)} Mzn</span>
                </div>
                <div className="flex justify-between font-semibold text-lg md:text-xl border-t border-gray-300 pt-3 text-black">
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
