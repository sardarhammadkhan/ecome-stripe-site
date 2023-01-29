import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

function Layout({children}:any) {
  const router = useRouter()
  const pathname = router.pathname
  console.log("pathname",pathname);
  
  return (
   <>
   <Navbar/> 
   {children}
  { pathname=='/Login'||pathname=='/cancel' ||pathname=='/success' || pathname=='/CartPage'|| pathname=='/Registered'?'':<Footer/>}
   </>
  )
}

export default Layout