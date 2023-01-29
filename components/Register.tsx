import React, { useState } from 'react';
import axios from 'axios'
import Link from 'next/link';

interface registerIstate{
  firstname:string,
  lastname:string,
  email:string,
  password:string
   
}
import { useRouter } from 'next/router'


const Register = () => {
  const route=useRouter()
 const [registeData, setregisteData] = useState<registerIstate>({
  firstname:"",
  lastname:"",
  email:"",
  password:''
 })

  const handleSubmit = async(e:any)=>{
    e.preventDefault()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      };
      const res = await axios.post('https://dancing-marzipan-19b460.netlify.app/register', registeData,config);
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      route.push('/Login')
      if(token){
        alert('You have register Successfully Plz Login')
      }
        } catch (err) {
      console.log(err);
    }      
  }
  const handelChange=(e:any)=>{
    const {name,value}=e.target
    setregisteData((prevState)=>({...prevState,[name]:value}))
  }

  return (
    <div className='flex flex-col  justify-center items-center '>
    <form  className="" onSubmit={(e)=>handleSubmit(e)}>
      <div className="">
        <label className=" text-gray-700 font-medium mb-2" htmlFor="first-name">
          First Name
        </label>
        <input 
          className="border border-gray-400 p-2 rounded-lg w-full " 
          type="text" 
          id="first-name" 
          name='firstname'
          value={registeData.firstname} 
          onChange={e => handelChange(e)} 
        />
      </div>
      <div className="">
        <label className=" text-gray-700 font-medium mb-2" htmlFor="last-name">
          Last Name
        </label>
        <input 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          type="text" 
          id="last-name" 
          name='lastname'
          value={registeData.lastname} 
          onChange={e => handelChange(e)} 
        />
      </div>
      <div className="">
        <label className=" text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          type="email" 
          id="email" 
          name='email'
          value={registeData.email} 
          onChange={e => handelChange(e)} 
        />
      </div>
      <div className="">
        <label className=" text-gray-700 font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          type="password" 
          id="password" 
          name='password'
          value={registeData.password} 
          onChange={e =>handelChange(e)} 
        />
      </div>
      <div className="">
        <label className=""/>
          </div>
          <button type='submit' className="bg-blue-500 my-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded custom-signin-class">
            Register
      </button >
      <p>If Already Registered Please  <Link href='/Login' className='text-primary'>Login</Link></p>
          </form>
          </div>
)
}
export default Register