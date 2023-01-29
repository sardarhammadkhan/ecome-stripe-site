import "../styles/globals.css";
const  init = require('next-fonts') 
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { wrapper } from "../app/store";
init({
  google: {
    families: ['Urbanist']
  }
})

 function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}

export default wrapper.withRedux(App);
