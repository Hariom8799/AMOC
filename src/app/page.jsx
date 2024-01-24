'use client';
import Carousel from './components/carousel2'
import Loading from './Loading';
import CardSection from './components/CardSection';
import { useState , useEffect } from 'react';

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
          <Carousel/>
          {/* <CardSection productData={productData}/> */}
        </>
      ) :
       
      <div><p>Something went wrong pls try again later!</p></div>
      
      
    )
    }
    
   </>
  )
}
