import React,{useEffect} from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
interface CatProps{
    Cats:{
      id: number,
      img:StaticImageData
      title:string
    }[]
  }
  
  
const CategoryItem=(props:CatProps) =>{  

  return (
<div className='grid grid-cols-1 md:grid-cols-3  flex flex-col md:flex-row   h-60vh' >
    {props?.Cats?.map((c)=>(
        <>
        
     <div key={c.id} className='relative h-[50vh] md:h-[55vh] lg:[h-60vh] '  >
    <Image src={c.img} alt='' 
      fill style={{objectFit:'cover'}} className='w-full lg:w-2/4 h-full' />
    <div className='absolute top-0 left-0 w-full h-full flex flex-col	 justify-center  items-center text-white' >
      
    <div className='text-lg lg:text-xl   mb-1'>{c.title}</div>
    <button className='border p-3 rounded' >
      <Link href='/FilterProduct'>Shop Now</Link> 
      </button>
  
    </div>
    </div>
   
    </>
))}
</div>

  )
}

export default CategoryItem
