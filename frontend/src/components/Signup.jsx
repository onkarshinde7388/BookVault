import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios' 
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const onSubmit = async(data) => {
      const userInfo = {
        fullName: data.name,
        email: data.email,
        password: data.password,
      }
      await axios.post("http://localhost:3000/users/signup", userInfo)
      .then((res) => {
        console.log(res);
        if(res && res.data ){
          toast.success("Signup Successful")
          localStorage.setItem("User", JSON.stringify(res.data.user));
          navigate("/");
          setTimeout(() => {
            window.location.reload();
          }, 2000)
        }
        
      })
      .catch((err) => {
        console.log(err.response);
        if(err.response){
          toast.error(err.response.data.message)
        }
      });
    }
  return (
    <div className='flex justify-center items-center h-screen'>
<div className='border p-6 rounded-md shadow-md  relative w-[400px]'>
  <div className="">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text" placeholder="Enter your FullName" className="input rounded-md outline-none mt-2 w-80 px-3 py-1 " {...register("name", { required: true })} />
        <br />
        {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
        <br />
        <span>Email</span>
        <br />
        <input type="email" placeholder="Enter your email" className="input rounded-md outline-none mt-2 w-80 px-3 py-1 " {...register("email", { required: true })} />
        <br />
        {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
        <br />
        <span>Password</span>
        <br />
        <input type="password" placeholder="Enter your password" className="input rounded-md outline-none mt-2 w-80 px-3 py-1 " {...register("password", { required: true })} />
        <br />
        {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
    </div>


    <div className='flex justify-around mt-4'>
        <button className='text-white bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup </button>
       <p>Already Registered? <a className='underline text-blue-600 cursor-pointer' onClick={() => {document.getElementById('my_modal_3').showModal()}}> Login</a>
       
       </p>
    </div>
  
    </form>
      <Login />
  </div>
</div>
    </div>
  )
}

export default Signup