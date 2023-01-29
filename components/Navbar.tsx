import React,{useState} from 'react'
import Link from 'next/link';
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { AppState } from '../app/store';

function Navbar() {
  const data = useSelector((state:AppState) => state.cart&& state.cart.cartItems)
    const [totalItemsInCart, settotalItemsInCart] = useState(null)
  const total=  data.reduce((acc:any,cuu:any)=>acc+= cuu.quantity,0)
  const router=useRouter
  const [openCart, setopenCart] = useState(false)
  const openCartForCheckOut=()=>{
    // router.push('/CartDataComp')
  }
  return (
    <>
    <div className='text-white flex justify-center ' style={{background:'rgb(179 179 227)'}}>
   <p> 50% off</p>
    </div>
    <div className="flex  justify-around items-center border-b-2 mb-1 p-2  ">
    
      <div className='flex-1'><p className='text-2xl font-bold  '>HAMMAD.</p> </div>
      <div  className='flex-1 flex justify-end items-center'>
        {/* <Link href='/CheckOut'> */}
      {/* <button className='ml-6   bg-indigo-500 rounded p-1 mt-1  text-white '  style={{height:"29px",width:"88px"}}>CheckOut</button></Link> */}
        {/* <button className='ml-6 bg-indigo-500 rounded p-1 mt-1  text-white' style={{height:"29px",width:"88px"}}><Link href='/Registered'>REGISTER</Link></button> */}
        {/* <button className='ml-6   bg-indigo-500 rounded p-1 mt-1  text-white '  style={{height:"29px",width:"88px"}}><Link href='/Login'>SIGN IN</Link></button> */}
       <div className='relative mr-3'>
        <Link href={'/CartPage'}><FaShoppingCart /> </Link><span className='absolute ' style={{top:"-17px",left:"15px"}}>{total}</span>

</div>
      </div>

    </div>
    </>

  )
}

export default Navbar