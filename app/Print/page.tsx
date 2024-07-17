"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

export default function page()
{
   const printpage = () =>
    {
        window.print();
    }

  return (
    <>
    <Button className='w-[100vw] h-8 bg-black text-gray-100 hover:bg-green-700' onClick={printpage}>Print</Button>
    </>
  )
}

