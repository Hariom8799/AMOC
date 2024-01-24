'use client';

import Loading from './Loading';
import { useState , useEffect } from 'react';
import HeroBanner from './components/HeroBanner';

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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 mx-5 md:px-0'> 
            
          </div>
          {/* <CardSection productData={productData}/> */}
        </>
      ) :
       
      <div><p>Something went wrong pls try again later!</p></div>
      
      
    )
    }
    
   </>
  )
}
