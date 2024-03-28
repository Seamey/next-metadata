import React from 'react'
type ParamProps = {
  params :{
    id:  number
  }
}

export async function generateMetadata({params} : ParamProps){
  const id = params.id
  const product = await getDetail(id)
  return {
    title: product?.title,
    describe: product.description,
    openGraph: {
      images: product.thumbnail,
    },
  }
}

async function getDetail(id:number){
  const productDetail= await fetch(`https://fakestoreapi.com/products/${id}`)
  return productDetail.json()
}
async function page  ({params}: ParamProps) {
  // const page: React.FC<{params: ParamProps}> =({params})=>{
  const id = params.id;
  const productDetail = await getDetail(id)
  return (
    <div>
      Detail page : {productDetail.title}
    </div>
  )
}

export default page
