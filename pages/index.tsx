import React ,{useState}from 'react'

import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Slider from '../components/Slider'
import CategoryItem from '../components/CategoryItem'
import {categories} from '../data'
import ProductList from '../components/ProductList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const inter = Inter({ subsets: ['latin'] })
interface CatState{
  Cats:{
    id: number,
    img:StaticImageData
    title:string
  }[]
}

export default function Home() {
 
const [Cats, setCat] = useState<CatState["Cats"]> (categories)
  
  return (
    <>      
    <Slider/>
   <CategoryItem  Cats={Cats}/>
    <ProductList/>
    <Newsletter/>
   
    </>
  )
}
