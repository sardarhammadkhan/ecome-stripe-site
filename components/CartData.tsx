import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import axios from 'axios'

import Image, { StaticImageData } from "next/image"
import { removeToCart } from "../features/cartSlice"
import { AppState } from '../app/store'
interface CartItemIstate {
  id: number;
  size: string;
  desc: string,
  price: number;
  quantity:number,
  img: StaticImageData;
}
function CartData() {
  const [removeCart, setremoveCart] = useState(false)
  const router=useRouter()
  const data = useSelector((state:AppState) => state.cart&& state.cart.cartItems)
  const [totalPrice, settotalPrice] = useState(0)
  useEffect(() => {
   const totalPrice= data?.reduce((acc: any,cuu: { price: any })=>acc += cuu.price,0)
   settotalPrice(totalPrice)
  }, [data])
  


  const dispatch = useDispatch()
  const removeItem = (id: number) => {
    setremoveCart(true)
    dispatch(removeToCart(id))
  }
  const finalCheckout=()=>{
            
  }
  return (
    <>
   
    <div className='absolute  w-full lg:w-50  h-[70vh] lg:border lg:w-[40vw] right-0' style={{ zIndex: "10" }}>
    <div className='flex justify-end'>
    <button className=' p-2 right-0' onClick={()=>router.push('/')}> BACK</button>
    </div>
      {data.length>0?<div>
      {
        data?.map((cart: CartItemIstate) => {
          return (

            <div key={cart.id} className='flex justify-between mr-4'>
              <div className='relative border mb-2 mr-1' style={{ width: "150px", height: "80px" }}>
                <Image src={cart.img} fill alt='' style={{objectFit:'contain'}} className='h-full w-full' />
              </div>
              <div className=''>
                <div>
                  <span className='text-xs sm:text:sm md:text-lg lg-text-2xl'>{cart.desc}</span>
                  <p className='text-xs sm:text:sm md:text-lg lg-text-2xl'>Quantity:{cart.quantity}</p>
                  <p className='text-xs sm:text:sm md:text-lg lg-text-2xl'>Price:{cart.price}</p>
                </div>
              </div>
              <span className='cursor-pointer ' onClick={() => removeItem(cart.id)} style={{ color: 'red' }}>X</span>
            </div>
          )
        })
      }
            <div className=' flex  justify-center' >
              <p className='text-lg'>Toatal Price:${totalPrice}</p>
              </div>

      <div className='flex justify-center'>

        <button className='border p-2 text-white bg-black' onClick={()=>router.push('/Registered') }>Check Out</button>
      </div>
      </div>  : <div className='flex justify-center border h-full w-full items-center'><p> No Item In Cart</p></div>}
    </div>
    </>
  )
}

export default CartData