import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Footer() {
  const router=useRouter()
  const pathname = router.pathname
  
  return (
    <div className=' grid grid-container grid-cols-1 sm:grid-cols-3 gap-0  bg-indego'>
      <div className='col-span-1  flex flex-col  mx-2 p-2' >
       <p className='text-2xl font-bold mb-4 text-center'>HAMMAD</p>
       <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste accusantium facilis incidunt aperiam facere perferendis voluptas animi beatae quam mollitia eveniet ullam, ad illum, inventore blanditiis at maiores! Quo, culpa.</p> 
      </div>
      <div className='col-span-1  flex flex-col justify-between items-between mx-2 p-2' >
        <div className='text-xl font-bold mb-4 text-center'>Useful Links</div>
        <div className='grid grid-container grid-cols-2'>
      <ul>
        <li  className='mb-2'><Link href="/">Home</Link></li>
        <li className='mb-2'> <Link href="/manFashion">Man Fashion</Link></li>
        <li className='mb-2'><Link href="/Accesscories">Accesscories</Link></li>
        <li  className='mb-2'><Link href="/orderingTrack">Ordering Track</Link> </li>
        <li  className='mb-2'><Link href="/Whislist">Whislist</Link></li>
      </ul>
      <ul>
        <li  className='mb-2'>Cart</li>
        <li  className='mb-2'>Female Fashion</li>
        <li >Accesscories</li>
        <li>Female fasion</li>
        <li>Whislist</li>
      </ul>
      </div>
      </div>
      <div className='col-span-1  flex flex-col justify-between items-center  mx-2 p-2' >
      <div className='text-xl font-bold mb-4 '>Contact</div>
      <div className='grid grid-container grid-cols-1'>
      <ul>
    
        <li className='mb-2'> <Link href="/manFashion">66554 Dixie Path, south Tpbincheser 08773</Link></li>
        <li className='mb-2'><Link href="/">4324343431432</Link></li>
        <li  className='mb-2'><Link href="/">contact@gmail.com</Link> </li>
        <li  className='mb-2'><Link href="/">VisCart</Link></li>
      </ul>
      </div>
      </div>
    </div>

  )
}

export default Footer