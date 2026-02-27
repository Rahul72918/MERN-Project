import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const demoEmail = import.meta.env.VITE_ADMIN_EMAIL
    const demoPassword = import.meta.env.VITE_ADMIN_PASSWORD

    console.log('Demo Email:', demoEmail)
    console.log('Demo Password:', demoPassword)

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const useDemoCredentials = () => {
        setEmail(demoEmail)
        setPassword(demoPassword)
        toast.info('Demo credentials filled. Click Login to continue.')
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full'>
            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter your password' required />
                    </div>
                    <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black hover:bg-gray-600' type="submit"> Login </button>
                </form>

                {demoEmail && demoPassword ? (
                    <div className='mt-4 pt-4 border-t border-gray-300'>
                        <p className='text-xs text-gray-600 text-center mb-2'>For Demo / Testing</p>
                        <button
                            type='button'
                            onClick={useDemoCredentials}
                            className='w-full py-2 px-4 rounded-md text-black bg-gray-200 hover:bg-gray-300 text-sm font-medium'
                        >
                            Use Demo Credentials
                        </button>
                    </div>
                ) : (
                    <div className='mt-4 pt-4 border-t border-gray-300'>
                        <p className='text-xs text-red-600 text-center'>⚠️ Demo credentials not configured in .env</p>
                        <p className='text-xs text-gray-500 text-center mt-1'>Email: {demoEmail || 'undefined'}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login

