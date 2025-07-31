import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


export default function ReciboLista() {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 border rounded-lg ">
        <div className="col-span-5">
            <div className="flex flex-col gap-1">
              <Label >Description</Label>
              <Input placeholder="Item Description"/>
            </div>
        </div>
        <div className="col-span-2">
            <div className="flex flex-col gap-1">
              <Label >Quantidade</Label>
              <Input type="number" min="1"/>
            </div>
        </div>
        <div className="col-span-2">
            <div className="flex flex-col gap-1">
              <Label >Rate ($)</Label>
              <Input type="number" min="0" step="0.01"/>
            </div>
        </div>
        <div className="col-span-2">
            <div className="flex flex-col gap-1">
              <Label >Preco</Label>
              <div className="h-9 px-3 py-1 bg-gray-50 border rounded-md flex items-center">
                0.00 Mzn
              </div>
            </div>
        </div>
        <div className="col-span-1 flex items-end">
            <Button 
            variant="outline"
            size="icon"
            >
                <Trash className="w-4 h-4"/>
            </Button>
        </div>
    </div>
  )
}
