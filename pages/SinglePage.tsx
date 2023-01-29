import { useRouter } from 'next/router'
import React ,{useState,useEffect}from 'react'
import Image, { StaticImageData } from "next/image";
import { selectAuthState, addToCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";


import Arrow from '../public/images/arrow.png'
import { AppState } from '../app/store';

interface SignleProductProps {
      id: number;
      size: string;
      desc:string,
      price: number;
      img: StaticImageData;
  }
  interface CartProductIstate {
   CartItem: {
    id: number;
    size: string;
    desc:string,
    price: number;
    img: StaticImageData;
}[]
}
  
function SinglePage() {
  const dispatch=  useDispatch()
  const data = useSelector((state:AppState) => state.cart&& state.cart.cartItems)

    const router=useRouter()
    const [singleItem, setsingleItem] = useState<SignleProductProps>()
    const [totalItems, settotalItems] = useState(1)
    const [ItemPrice, setItemPrice] = useState(0)
    const [cartArry, setcartArry] = useState<CartProductIstate['CartItem']>([])
    useEffect(() => {
        if(router.query.item){
          if(Array.isArray(router.query.item)){

          }else{

            const item=  JSON.parse(router.query.item)

            setsingleItem(item)
           setItemPrice(item.price)
      
          }

          }else{
      
          }
    }, [router.query.item])
    
   const removeQuantity=()=>{
    if(totalItems>0 && singleItem){
        settotalItems((prevState)=>prevState-1)
        setItemPrice((prevState)=>prevState - singleItem.price)
    }
   }
   
   const addQuantity=()=>{
    if( singleItem){
      settotalItems((prevState)=>prevState+1)
      setItemPrice((prevState)=>prevState + singleItem.price)
  }

   } 
   const AdddToCart=(item:SignleProductProps|undefined)=>{
   let newObj={...item,quantity:totalItems,price:ItemPrice}
   if(data.find((exist:SignleProductProps)=>exist.id==newObj.id)){
    alert('exist')
   }else{
    dispatch(addToCart(newObj))

   }
    router.back()
   }
  
  return (
    <>

    <div className=' relative'>
    <Image 
    className='cursor-pointer '
        src={Arrow} 
        alt=''
        height={15}
        width={15}
        onClick={()=>router.push('/FilterProduct')}
        />
            </div> 
    <div className=' flex flex-col justify-center md:flex-row border-bottom'>
  <div className='md:w-[50vw] h-[70vh] relative '>
    <Image 
    src={singleItem?.img||''} 
    fill
    style={{ objectFit: "contain" }}
  className='w-full h-full '
    alt=''/>
    
  </div>
  <div className='md:w-[50vw] border text-lg text-center flex items-center justify-center flex-col'>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta debitis qui dolorem ea <br></br>voluptate cum rerum neque labore  obcaecati natus, quae commodi enim excepturi ipsum?<br></br> Enim saepe impedit modi pariatur.</p>
    <p className='text-5xl my-4'><span className='mx-2'>$</span>{ItemPrice}</p>
<div className='flex border w-full justify-around '>
    <div>
    <button onClick={()=>removeQuantity()} className='border border px-4 py-2 mx-2'>-</button>
    <span>{totalItems}</span>
    <button className='border border px-4 py-2 mx-2' onClick={()=>addQuantity()}>+</button>
    </div>
    <div className='group'>
    <button className='border p-2 group-hover:bg-[#1da1f2] hover:text-white' onClick={()=>AdddToCart(singleItem)}>Add To Cart</button>
    </div>
</div>
  </div>

        </div>
        </>
  )
}

export default SinglePage