import { StaticImageData } from 'next/image';
import React,{useState,useEffect} from 'react'
import Product  from "../components/Product";
import {popularProducts} from '../data'

interface ProdcutIState{
    pList:{
  id:string,
  size:string,
  desc:string,

  price:number,
  img:StaticImageData
    }[]
}
function FilterProduct() {
    const [pList, setpList] = useState<ProdcutIState['pList']>(popularProducts)
    const [filterSize, setfilterSize] = useState('All')

    const handelFilter=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    setfilterSize(e.target.value)
    
    }
useEffect(() => {
 
  const filterData=()=>{
    let filteredProducts=[]

    if(filterSize!=='All'){
      filteredProducts=popularProducts.filter((product)=>{
        return product.size===filterSize
      })
    }else{
      filteredProducts=[...popularProducts]
    }
    return filteredProducts
  }
  setpList(filterData())
}, [filterSize])

    
 
    const sortByprice=(e:React.ChangeEvent<HTMLSelectElement>)=>{
      let {value}=e.target
      let filteredImages=[...pList]
      
        if(value==='lowest'){
            filteredImages.sort((a,b)=>{
         return a.price - b.price
        })
        }else if(value==='heighest'){
          
        filteredImages.sort((a,b)=>{
          return b.price - a.price
          })
          
        }

      setpList(filteredImages)
    }

    
  return (
    <>
    <div className='mx-2 flex justify-between'>
       
        <div>
        <p className='font-bold text-2xl'>Filter</p>
        <select className='border '>
        <option  selected>Color</option>
        <option>White</option>
        <option>Green</option>
        <option>Blue</option>
        <option>Black</option>
        </select>
        <select value={filterSize} onChange={(e)=>handelFilter(e)} className='border ml-2' >
        <option  value='All'>Alls</option>
        <option value='xs'>XS</option>
        <option value='sm'>sm</option>
        <option value='md'>md</option>
        <option value='lg'>lg </option>
        <option value='xl'>xl </option>
       
        </select>
        </div>
        <div>
        <p className='font-bold text-2xl'>Sort Product </p>
        <select onChange={(e)=>sortByprice(e)}  className='brder'>
        <option value=''>Newest</option>
        <option value='lowest'>Lowest Price</option>
        <option value='heighest'>Highest Price</option>
     
        </select>
        </div>
        </div>
    <div className='grid grid-cols-1 gap-1 md:grid-cols-3 h-[50]  border md:min-h-[80vh]'>
    {
        
        pList?.map((p)=>(
          <>
          
            <Product key={p.id} product={p} />
          
            </>
        ))  
       
    }
     </div>
     </>
 
  )
}

export default FilterProduct