import React from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import Logout from './home/Leftpart/Logout';

function App() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  console.log(authUser, "authUser")

  return (
    <>
      <Routes>
        <Route
         path='/' element={
          authUser ? (
        <div className="drawer lg:drawer-open">
                <input
                  id="my-drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <Right />
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu w-80  min-h-full bg-black text-base-content  sm:mr-0 mr-10">
                    <Left />
                  </ul>
                </div>
              </div>  
          ) : (
            <Navigate to={'/login'} />
          )
        }
        />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </>
  )
}






















export default App
