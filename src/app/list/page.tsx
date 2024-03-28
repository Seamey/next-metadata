import React from 'react'
import ListPage from './ListPageComponent'
import { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: "List",
  description: "Welcome to List Page.",
  keywords: ['shop', 'ecommerce', 'sell']
};

const page = () => {
  return (
    <>
    <ListPage/>
    </>
  )
}

export default page