// "use client"
// import React from 'react'
// import React, { useState, useEffect } from 'react';
import CardComponent from '@/components/cards/CardComponent'
import { ProductType } from '@/types/product'
import LoadingComponent from '../loading'
import { Suspense } from 'react'
import Link from 'next/link';
import { Metadata } from 'next';
// import { useRouter } from 'next/router'

export const metadata: Metadata = {
  title: "Product",
  description: "This is Product page shop",
  keywords: ['shop', 'ecommerce', 'sell',"card"]
};

async function fetchProduct() {
  const product = await fetch("https://dummyjson.com/products?limit=100", {
    // cache: "no-store", won't store your cache
    //refresh up your cache every 30s
    // next: {
    //   revalidate: 30
    // }
    cache:"no-store"
  });
  const res = await product.json();
  return res.products;
}

// asyn is not recommended in client server 
export default async function ProductPage() {
  // const router = useRouter()  //for client
  const products = await fetchProduct(); //for server
  // const router = useRouter(); // for client
  // const [products, setProducts] = useState([]); // State for storing products
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedProducts = await fetchProduct();
  //     setProducts(fetchedProducts);
  //   };

  //   fetchData(); // Fetch data when component mounts
  // }, []);

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent />} > 
          {/* another way for client side  */}
          {products.map((product: ProductType) => {
            return (
              <Link href={`/product/${product.id}`} key={product.id}>
                <CardComponent
                  thumbnail={product.thumbnail}
                  title={product.title}
                />
              </Link>
            )
          })}

          {/* {product.map((product:ProductType)=>{
            return(
            <CardComponent
            thumbnail={product.thumbnail}
            title={product.title}
            key={product.id}
          />
            )
          })} */}

          {/* server side */}
          {/* {product?.map((pro: ProductType) => (
          <CardComponent
            thumbnail={pro.thumbnail}
            title={pro.title}
            key={pro.id}
          />
        ))} */}
        </Suspense>
      </div>
    </>
  );
}

