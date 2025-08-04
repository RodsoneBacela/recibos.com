"use client"

import ReciboForm from "@/components/recibo-form";
import ReciboPreview from "@/components/recibo-preview";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useState } from "react"


export default function Home() {
  const [showpreview, setShowPreview] = useState(false);


  if(showpreview) {
    return <ReciboPreview onBack={() => setShowPreview(false)}/>;
  }
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Gerador de Recibos</h1>
            <p className="text-gray-600">Crie o recibo da sua empresa de forma simples e rápida
            </p>
          </div>
          <Button onClick={() => setShowPreview(true)}>
            <Eye className="w-4 h-4 mr-2"/>
            Ver
          </Button>
        </div>
        <ReciboForm />
      </div>

    </div>
  )
}