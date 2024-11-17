import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { IoMdEye,IoMdEyeOff} from "react-icons/io";
import { TbArrowUpRight } from "react-icons/tb";
import { UserData } from "../../context/UserContext.jsx";
const Login = () => {
    const navigate = useNavigate();
    const { btnLoading, loginUser } = UserData();
    const [pass,setPass]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        await loginUser(email, password, navigate);
      };
  return (
    <section className='auth-page mt-12  mb-12 max-w-screen-xl grid place-items-center mx-auto '>
        <div className='auth-form grid  gap-y-8  shadow-2xl px-12 py-8'>
            <div>
                <h1 className='lg:text-center text-5xl font-semibold mb-4 font-mono'>Login</h1>
                <p className='text-gray-600 font-medium '>Welcome back! Please log in to access your account.</p>
            </div>
            <form onSubmit={submitHandler}>
            <div>
                <label className='mb-2 block font-medium text-gray-600' htmlFor="email-id">Email</label>
                <input required className='w-full px-4 py-4 bg-slate-100 rounded-md' placeholder='Enter your Email' type="email" name="email-id" id="email-id" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='relative'>
            <label className='mb-2 block font-medium text-gray-600' htmlFor="pass-id">Password</label>
            <input required 
            value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full mb-1 px-4 py-4 bg-slate-100 rounded-md'  placeholder='Enter your Password' type={pass ? "text":"password"} name="pass-id" id="email-id"/> 
            <button onClick={()=>(setPass(!pass))} className='absolute right-6 bottom-11 text-xl '>{pass ? <IoMdEyeOff/> :<IoMdEye />}</button>
            <div className='text-end text-gray-600 '><Link className=''>Forgot Password?</Link ></div>
            </div>
            <div className='flex gap-4'>
            <div className='text-gray-700'>
                <input className='accent-slate-200 mr-2 scale-125 cursor-pointer' type="checkbox" name="rem-id" id="rem-id" />
                
                <label  htmlFor="rem-id ">Remember Me</label>
            </div>
            <div className='text-gray-700 '>
                <input required className='accent-slate-200 mr-2 scale-125 cursor-pointer' type="checkbox" name="rem-id" id="rem-id" />
                
                <label   htmlFor="ins-id ">Student Account</label>
            </div>
            </div>
            
            <div className='flex flex-col gap-4'>
                <button disabled={btnLoading} type='submit' className='bg-orange-400 py-3 text-white rounded-md font-medium'>{btnLoading?"Please Wait":"Login"}</button>
               <button className='bg-slate-200 py-2 rounded-md font-medium'><img className='inline-block w-8 mr-2 ' src="src\assets\img\googlelogin.svg" alt="" />Login with Google</button>
               <div className='text-center '>
                <p className=''>Don't have an account?<Link to="/register" className='ml-1 underline font-bold '>Sign Up <TbArrowUpRight className='inline-block mb-1 text-2xl' />
                </Link></p>
               </div>
            </div>
            </form>
           
        </div>
    </section>
  )
}

export default Login