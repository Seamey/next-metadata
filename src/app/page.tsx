"use client"
import React from 'react';
import CardComponent2 from '@/components/cards/CardProductComponent';
import { ProductType2 } from '@/types/products';
import LoadingComponent from './loading';
import { Suspense } from 'react';

async function fetchProduct() {
  const product = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store"
  });
  const res = await product.json();
  return res;
}

export default function Home() {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProduct();
        setProduct(productsData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false); 
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mt-10 flex justify-center flex-wrap gap-5">
      <h1 className='font-bold font-2xl text-blue-400'>សូមស្វាគមន៍មកកាន់ mochi mochi</h1>
      <br></br>
      <h1 className='font-semibold text-xl text-blue-300'>Welcome to mochi mochi</h1>
      <Suspense fallback={<LoadingComponent/>} >
        {!loading && (
          product?.map((pro: ProductType2) => (
            <CardComponent2
              image={pro.image}
              title={pro.title}
              key={pro.id}
            />
          ))
        )}
      </Suspense>
    </div>
  );
}
