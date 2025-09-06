import React from 'react'
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';


const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({ ...authUser, user: null })
            localStorage.removeItem("User");
            toast.success("Logout Successfully");

          setTimeout(() => {
            window.location.reload();
          }, 2000)
        } catch (error) {
            toast.error("Logout Failed");
            setTimeout(() => {}, 2000)
        }
    }
  return (
    <div className='p-4 '>
        <button className='px-3 py-2 text-white bg-red-500 cursor-pointer rounded-md' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout