import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async () => {
        const res = await fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        const data = await res.json()
        
        if (data.token) {
            localStorage.setItem('token', data.token)
            navigate('/dashboard')
        } else {
            console.log(data)
        }
    }
    return (
        <div>
            <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-5xl font-extrabold">
                        Welcome Back.
                    </h2>

                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            className="py-2 px-3 border border-gray-300 focus:border-logoBlue focus:outline-none focus:ring focus:ring-logoBlue focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="py-2 px-3 border border-gray-300 focus:border-logoBlue focus:outline-none focus:ring focus:ring-logoBlue focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                className="border border-gray-300 text-red-600 shadow-sm focus:border-logoBlue focus:ring focus:ring-logoBlue focus:ring-opacity-50"
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 block text-sm leading-5 text-gray-900"
                            >
                                {' '}
                                Remember me{' '}
                            </label>
                        </div>
                        <a className="text-sm"> Forgot your password? </a>
                    </div>
                    <div className="mt-6">
                        <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-logoBlue border border-transparent rounded-md font-semibold capitalize text-white hover:bg-logoDark active:bg-logoDark focus:outline-none focus:border-logoDark focus:ring focus:ring-logoBlue disabled:opacity-25 transition" onClick={() => submit()}>
                            Sign In
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <Link to={'/register'} className="underline">
                            Sign up for an account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
