import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Account",
  description: "This is Account page shop",
  keywords: ['shop', 'ecommerce', 'sell',"card"]
};

const page = () => {
  return (
    <div>
      This is account page
    </div>
  )
}

export default page
