import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input} from "./ui/input"
import { Label } from "./ui/label"

export default function DetalhesContacto() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Detalhes do Cliente</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="font-medium">Dados do Emitente</h3>
            <div className="flex flex-col gap-1">
              <Label htmlFor="empresa">Nome</Label>
              <Input id="empresa" placeholder="nome da Empresa"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="empresaNuit">NUIT(opcional)</Label>
              <Input id="empresaNuit" placeholder="Nuit da Empresa"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="empresaEmail">Email</Label>
              <Input id="empresaEmail" placeholder="empresa@mail.com" type="email"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="empresaContacto">Contacto</Label>
              <Input id="empresaContacto" placeholder="(+258) 123456789" type="tel"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="empresaEndereco">Endereço</Label>
              <Input id="empresaEndereco" placeholder="av. 24 de Julho, cidade de Maputo"/>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Dados do Clinte</h3>
            <div className="flex flex-col gap-1">
              <Label htmlFor="cliente">Nome do Clinte</Label>
              <Input id="cliente" placeholder="nome da Empresa"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="clienteNuit">NUIT (opcional)</Label>
              <Input id="clienteNuit" placeholder="Nuit da Cliente"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="clienteContacto">Contacto</Label>
              <Input id="clienteContacto" placeholder="(+258) 123456789" type="tel"/>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
