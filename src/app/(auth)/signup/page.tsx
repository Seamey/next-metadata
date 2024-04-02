import React from 'react'
import { Metadata } from 'next';
import RegisterForm from '@/components/RegisterForm';

export const metadata: Metadata = {
  title: "SignUp",
  description: "This is Sign Up page shop",
  keywords: ['shop', 'ecommerce', 'sell',"card"]
};

const page = () => {
  return (
    <div className='flex h-screen bg-slate-300 justify-center items-center'>
      <RegisterForm/>
    </div>
  )
}

export default page
