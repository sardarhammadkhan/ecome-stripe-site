import React,{useEffect} from 'react'
import getStripe from '../lib/getStripe';
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../app/store';

function StripeChk() {
  const data = useSelector((state:AppState) => state.cart&& state.cart.cartItems)

useEffect(() => {
  
    const runEffect=async()=>{
     
      try {
        let lineItems:any=[]
        data.forEach((item) => {
          lineItems.push({
            price: item.id,
            quantity: item.quantity,
          });
        });
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
          lineItems:lineItems,
          mode: 'subscription',
          successUrl: `http://localhost:3000/success`,
          cancelUrl: `http://localhost:3000/cancel`,
          customerEmail: 'customer@email.com',
        });
      } catch (error) {
        console.warn(error)
      
      }
        
    }

    runEffect()

    }, [data])


   
  return (
    <div></div>
  )
}

export default StripeChk