import { StaticImageData } from 'next/image'
import React ,{useState}from 'react'
import {popularProducts} from '../data'
import Product from './Product'
interface ProdcutIState{
    pList:{
  id:string,
  size:string,
  price:number,
  img:StaticImageData
    }[]
}
function ProductList() {
    const [pList, setpList] = useState<ProdcutIState['pList']>(popularProducts)
  return (
    <div className='grid grid-cols-1 gap-1 md:grid-cols-3 h-[50]  border md:min-h-[80vh] '>
       {
      pList?.map((p)=>(
                <Product key={p.id} product={p}/>
       
                ))
              }
    </div>
  )
}

export default ProductList