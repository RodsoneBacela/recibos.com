import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input} from "./ui/input"
import { Label } from "./ui/label"
import { useFactura } from "@/context/factura-context";

export default function DetalhesContacto() {

  const {factura, updateFactura}= useFactura();
  console.log(factura)
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
              <Input 
                id="empresa" 
                value={factura.empresa}
                onChange={(e) => updateFactura({empresa: e.target.value})}
                placeholder="nome da Empresa"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="empresaNuit">NUIT(opcional)</Label>
              <Input 
              id="empresaNuit" 
              value={factura.empresaNuit}
              onChange={(e) => updateFactura({empresaNuit: e.target.value})}
              placeholder="Nuit da Empresa"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="empresaEmail">Email</Label>
              <Input 
              id="empresaEmail"
              value={factura.empresaEmail}
              onChange={(e) => updateFactura({empresaEmail: e.target.value})}
              placeholder="empresa@mail.com" 
              type="email"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="empresaContacto">Contacto</Label>
              <Input 
              id="empresaContacto"
              value={factura.empresaContacto}
              onChange={(e) => updateFactura({empresaContacto: e.target.value})} 
              placeholder="(+258) 123456789" 
              type="tel"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="empresaEndereco">Endereço</Label>
              <Input 
              id="empresaEndereco"
              value={factura.empresaEndereco}
              onChange={(e) => updateFactura({empresaEndereco: e.target.value})} 
              placeholder="av. 24 de Julho, cidade de Maputo"/>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Dados do Clinte</h3>
            <div className="flex flex-col gap-1">
              <Label htmlFor="cliente">Nome do Clinte</Label>
              <Input 
              id="cliente"
              value={factura.cliente}
              onChange={(e) => updateFactura({cliente: e.target.value})} 
              placeholder="nome da Empresa"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="clienteNuit">NUIT (opcional)</Label>
              <Input 
              id="clienteNuit"
              value={factura.clienteNuit}
              onChange={(e) => updateFactura({clienteNuit: e.target.value})}  
              placeholder="Nuit da Cliente"/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="clienteContacto">Contacto</Label>
              <Input 
              id="clienteContacto"
              value={factura.clienteContacto}
              onChange={(e) => updateFactura({clienteContacto: e.target.value})}  
              placeholder="(+258) 123456789" 
              type="tel"/>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
