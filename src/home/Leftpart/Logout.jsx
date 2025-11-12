import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import toast from 'react-hot-toast';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false);
    const handleLogout = async () => {
      setLoading(true);
      try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/logout`);
      localStorage.removeItem("ChatAppLogin");
            Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logout Successful");
      window.location.reload();
 setTimeout(() => {
  navigate("/login")
 }, 6000);
      } catch (error) {
        console.log("error in logout",error)
      }
    }
  return (
   <>
   <hr />
      <div className=" h-[10vh] bg-slate-800">
        <div>
          <BiLogOutCircle
            className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1"
            onClick={handleLogout}
          />
        </div>
      </div>
   </>
  )
}

export default Logout