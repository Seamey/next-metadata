import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Team",
  description: "This is Team page shop",
  keywords: ['shop', 'ecommerce', 'sell',"card"]
};

const page = () => {
  return (
    <div>
      This is Team page
    </div>
  )
}

export default page
