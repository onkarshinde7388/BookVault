import React from 'react'
import { href, Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios' 
import { toast } from 'react-hot-toast'
const Login = () => {
    const {
    register,   
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
      const userInfo = {
        email: data.email,
        password: data.password,
      }
      await axios.post("http://localhost:3000/users/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res && res.data ) {
          toast.success("Login Successful");
          document.getElementById('my_modal_3').close();
          setTimeout(() => {
            localStorage.setItem("User", JSON.stringify(res.data));
            window.location.reload();
          }, 2000)
        } 
      })
      .catch((err) => {
        console.log(err.response);
        if(err.response){
           localStorage.removeItem("User");
          toast.error(err.response.data.message)
        }
      });
   }  
  return (
    <>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      {/* <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
      <button 
    type="button" 
    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
    onClick={() => { document.getElementById('my_modal_3').close(); window.location.href = '/'; }}>
    ✕
</button>
    
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder="Enter your email" className="input rounded-md outline-none mt-2 w-80 px-3 py-1 "  {...register("email", { required: true })} />
        <br />
        {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
        <span>Password</span>
        <br />
        <input type="password" placeholder="Enter your password" className="input rounded-md outline-none mt-2 w-80 px-3 py-1 "  {...register("password", { required: true })} />
        <br />
        {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
    </div>


    <div className='flex justify-around mt-4'>
        <button className='text-white bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login </button>
       <p>Not Registered <Link to ="/signup" className='underline text-blue-600 cursor-pointer'> Signup</Link></p>
    </div>
    </form>
  </div>
</dialog>
    </>
  )
}

export default Login