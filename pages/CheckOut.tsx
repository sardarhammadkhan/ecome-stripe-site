import React from 'react'
import getStripe from '../lib/getStripe';
import { useRouter } from 'next/router'

function CheckOut() {
  const router = useRouter()

//     const stripeChk=()=>{
//     fetch('http://localhost:5000/chkcout-session',{
//     method:'POST',
//     headers:{
//    "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         items:[
//             {id:1,quantity:'2'},
//             {id:2,quantity:'4'},
//         ]
//     })

//     }).then((res)=>{
//         if(res.url) {
//             // window.location.assign(res.url)
//         }
// }
//     ).then((res)=>{
//         console.log("re",res);
        
//     })
//     }
async function handleCheckout() {
  router.push('/Registered')
    // const stripe = await getStripe();
    // const { error } = await stripe.redirectToCheckout({
    //   lineItems: [
    //     {
    //       price: 'price_1MRJJfK7tKkQJn2CQK36YjBD',
    //       quantity: 1,
    //     },
    //     {
    //         price: 'price_1MRJJEK7tKkQJn2CIP0u6HZR',
    //         quantity:2,
    //       },
    //   ],
    //   mode: 'subscription',
    //   successUrl: `http://localhost:3000/success`,
    //   cancelUrl: `http://localhost:3000/cancel`,
    //   customerEmail: 'customer@email.com',
    // });
    // console.warn(error.message);
  }
  return (
    <button onClick={()=>handleCheckout()} className='border'>CheckOuts</button>
  )
}

export default CheckOut