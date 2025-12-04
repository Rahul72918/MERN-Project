import axios from "axios"
import React, { useState } from 'react'
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
function login() {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4001/user/login", {
        email,
        password
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log('Login response:', data)
      
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        toast.success(data.message || "User logged in successfully")
        setEmail("")
        setPassword("")
        
        // Small delay to ensure localStorage is set before navigation
        setTimeout(() => {
          navigateTo("/");
        }, 100);
      } else {
        toast.error("No token received from server");
      }
    } catch (error) {
      console.log('Login error:', error)
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.errors || 
                          error.response?.data?.message || 
                          "Login failed";
      toast.error(errorMessage);
    }
  }

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-5 text-center'>login</h2>
        <form onSubmit={handleRegister}>

          {/* email */}
          <div className='mb-4'>
            <label className='block mb-2 font-semibold' htmlFor="">Email</label>
            <input className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2  focus:ring-blue-500 '
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email' />
          </div>

          {/* password */}
          <div className='mb-4'>
            <label className='block mb-2 font-semibold' htmlFor="">Password</label>
            <input className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 '
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password' />
          </div>

          <button type="submit" className='w-full bg-blue-600 text-white hover:bg-blue-900 duration-300 rounded-xl font-semibold p-3'>login</button>
          <p className='mt-4 text-center  text-gray-600'>New User? <Link to="/signup" className='text-blue-600 hover:underline'>Signup</Link></p>
        </form>

      </div>
    </div>
  )
}

export default login