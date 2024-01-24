'use client';

import Loading from './Loading';
import { useState , useEffect } from 'react';
import HeroBanner from './components/HeroBanner';
import Card from './components/Card';

export default function Home() {

    const [loading,setLoading] = useState(true);
    const [productData,setProductData] = useState([])

    async function getProduct(){
        try{
            setLoading(true);
            let url = "https://fakestoreapi.com/products"
            let resp = await fetch(url);
            let data = await resp.json()
            setProductData(data)
            console.log(data)
            setLoading(false)
        }
        catch(error){
            setProductData([])
            toast.error("Something went wrong")
        }
        
    }

    useEffect(()=>{
        getProduct();
    },[])

  return (
   <>
    {  loading ? <Loading/> : (
      productData ? 
      (
        
        <>
          {/* <Carousel2/> */}
          <HeroBanner/>

          {/* Product card section */}
          <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 md:px-0'> 
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </>
      ) :
       
      <div><p>Something went wrong pls try again later!</p></div>
      
      
    )
    }
    
   </>
  )
}
