import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import axios from "axios";

const useGetAllUser = () => {
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        // const token = Cookies.get("jwt");
        // console.log(token,"tokemn")
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/user/allusers`, {
            withCredentials:true,  // ensures cookie (jwt) is included automatically
            // headers: {
            //     "Authorization": `Bearer ${token}`
            // }
        });
        if(!response){
          console.log("no cookied found")
          alert("no token found")
        }
        // const data = await response.json();
        setAllUser(response.data.filterUsers || [] );
        setLoading(false);
      } catch (error) {
        console.log("error in getAllUsers");
      }
    };
    getUsers();
  }, []);
  return [allUser, loading];
};

export default useGetAllUser;
