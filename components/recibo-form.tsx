import React from 'react'
import DetalhesBasicos from './detalhes-basicos'
import DetalhesContacto from './detalhes-contacto'
import Lista from './lista'
import TotalETaxas from './total-e-taxas'

export default function ReciboForm() {
  return (
    <div className='flex flex-col gap-4'>
        <DetalhesBasicos />
        <DetalhesContacto />
        <Lista />
        <TotalETaxas />
    </div>
  )
}
