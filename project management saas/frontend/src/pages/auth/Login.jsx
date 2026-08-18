import React from 'react'
import {UserKey} from "lucide-react"
import {useForm} from "react-hook-form"
import { NavLink } from 'react-router-dom'


const Login = () => {

const {register, handleSubmit} = useForm()

const onSubmit = (data)=>{
  console.log(data)
}








  return (
    //screen
    <div className='bg-black w-full h-screen flex justify-center items-center'>
      {/* main container */}
    <div className='bg-[rgba(21,21,21,1)] w-[30%] h-[80%] rounded-4xl'>
      {/* top */}
      <div className=' text-white p-6 flex flex-col items-center gap-2'>
        <UserKey size={60} color="white" />
        <h1 className='text-4xl font-bold'>Welcome back</h1>
        <h3 className='text-3xl font-bold'>Login</h3>
      </div>
      {/* middle */}
    <div className=' p-5 flex flex-col  '>
      <form className='flex flex-col items-center h-70 justify-around'  onSubmit={handleSubmit(onSubmit)}>
      <input className='w-[80%] h-[20%] rounded-2xl px-2 bg-black text-white' placeholder='Email' type="text" {...register("email")} />
      <input className=' w-[80%] h-[20%] rounded-2xl px-2 bg-black text-white' placeholder='Password' type="text" {...register("password")} />

      <NavLink className="self-end mr-[10%] text-white"> Forgot password?</NavLink>

      <button className='w-[80%] h-[20%]  font-bold rounded-2xl bg-white text-black ' type='Submit'>Login</button>

      <NavLink className="text-white"
      to="/register"
      >Create Account</NavLink>

      </form>

      

    </div>


    </div>


    </div>
  )
}

export default Login