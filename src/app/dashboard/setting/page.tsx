import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Setting",
  description: "This is Setting page shop",
  keywords: ['shop', 'ecommerce', 'sell',"card"]
};

const page = () => {
  return (
    <div>
      This is setting page
    </div>
  )
}

export default page
