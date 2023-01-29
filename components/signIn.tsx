/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
interface formState{
  email:string,
  password:string
}

function signIn() {
  const route=useRouter()
  const [formData, setformData] = useState<formState>({
    email:'',
    password:""
  })
 const handelChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
  const {name,value}=e.target
  setformData((prevState)=>({...prevState,[name]:value}))
  }
const handelSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
};
  e.preventDefault()
  try {
    const res = await axios.post('https://dancing-marzipan-19b460.netlify.app/login', formData,{headers:headers});
    const token = res.data.token;
    localStorage.setItem('jwtToken', token);
    route.push('/StripeChk')
      } catch (err) {
    console.log(err);
      }
}

  return (

    <div className='flex flex-col  justify-center items-center '>
      <form onSubmit={(e)=>handelSubmit(e)}>
        <div>
        <label className='text-gray-700 font-medium mb-2'>Email</label>
        <input className='border border-gray-400 p-2 rounded-lg w-full ' type='email' name='email' value={formData.email} onChange={(e)=>handelChange(e)}></input>
        </div>
        <div>
        <label htmlFor="" className='text-gray-700 font-medium mb-2'>Password</label>
        <input className='border border-gray-400 p-2 rounded-lg w-full ' type='password' name='password' value={formData.password} onChange={(e)=>handelChange(e)}></input>
        </div>
        <button type='submit' className="bg-blue-500 my-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded custom-signin-class">
  Sign In
</button>



      </form>
    </div>
  )
}



export default signIn