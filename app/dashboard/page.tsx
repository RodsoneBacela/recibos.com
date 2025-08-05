"use client";

import ReciboForm from "@/components/recibo-form";
import ReciboPreview from "@/components/recibo-preview";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Recibo() {
  const [showPreview, setShowPreview] = useState(false);

  if (showPreview) {
    return <ReciboPreview onBack={() => setShowPreview(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <Link href="/" className="flex  items-center  py-6 text-3xl font-bold tracking-tight ">
                Recibos<span className="text-neutral-400">.com</span>
            </Link>
            <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
              Gerador de Recibos
            </h2>
            <p className="mt-2 text-gray-600 max-w-md">
              Crie o recibo da sua empresa de forma simples e rápida.
            </p>
          </div>
          <Button
            onClick={() => setShowPreview(true)}
            className="bg-black text-white hover:bg-neutral-800 transition flex items-center"
          >
            <Eye className="w-5 h-5 mr-2" />
            Ver
          </Button>
        </header>

        <ReciboForm />
      </div>
    </div>
  );
}
