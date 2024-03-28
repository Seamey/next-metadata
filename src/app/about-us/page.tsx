import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "AboutUs",
  description: "This is About Us page shop",
  keywords: ['shop', 'ecommerce', 'sell',"card"]
};

const page = () => {
  return (
    <div>
      This is About Page
    </div>
  )
}

export default page
