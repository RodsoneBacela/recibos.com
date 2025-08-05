import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useFactura } from "@/context/factura-context";

export default function DetalhesContacto() {
  const { factura, updateFactura } = useFactura();

  return (
    <div>
      <Card className="rounded-lg shadow-sm border border-neutral-200">
        <CardHeader>
          <CardTitle className="text-2xl font-light text-neutral-800 tracking-tight">
            Detalhes do Cliente
          </CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Emitente */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-neutral-700">Dados do Emitente</h3>

            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-sm text-neutral-600">Nome</Label>
              <Input
                id="empresa"
                value={factura.empresa}
                onChange={(e) => updateFactura({ empresa: e.target.value })}
                placeholder="Nome da Empresa"
                className="bg-white text-neutral-800"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="empresaNuit" className="text-sm text-neutral-600">NUIT (opcional)</Label>
              <Input
                id="empresaNuit"
                value={factura.empresaNuit}
                onChange={(e) => updateFactura({ empresaNuit: e.target.value })}
                placeholder="NUIT da Empresa"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="empresaEmail" className="text-sm text-neutral-600">Email</Label>
              <Input
                id="empresaEmail"
                type="email"
                value={factura.empresaEmail}
                onChange={(e) => updateFactura({ empresaEmail: e.target.value })}
                placeholder="empresa@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="empresaContacto" className="text-sm text-neutral-600">Contacto</Label>
              <Input
                id="empresaContacto"
                type="tel"
                value={factura.empresaContacto}
                onChange={(e) => updateFactura({ empresaContacto: e.target.value })}
                placeholder="(+258) 123456789"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="empresaEndereco" className="text-sm text-neutral-600">Endereço</Label>
              <Input
                id="empresaEndereco"
                value={factura.empresaEndereco}
                onChange={(e) => updateFactura({ empresaEndereco: e.target.value })}
                placeholder="Av. 24 de Julho, Maputo"
              />
            </div>
          </div>

          {/* Cliente */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-neutral-700">Dados do Cliente</h3>

            <div className="space-y-2">
              <Label htmlFor="cliente" className="text-sm text-neutral-600">Nome</Label>
              <Input
                id="cliente"
                value={factura.cliente}
                onChange={(e) => updateFactura({ cliente: e.target.value })}
                placeholder="Nome do Cliente"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clienteNuit" className="text-sm text-neutral-600">NUIT (opcional)</Label>
              <Input
                id="clienteNuit"
                value={factura.clienteNuit}
                onChange={(e) => updateFactura({ clienteNuit: e.target.value })}
                placeholder="NUIT do Cliente"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clienteContacto" className="text-sm text-neutral-600">Contacto</Label>
              <Input
                id="clienteContacto"
                type="tel"
                value={factura.clienteContacto}
                onChange={(e) => updateFactura({ clienteContacto: e.target.value })}
                placeholder="(+258) 123456789"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
