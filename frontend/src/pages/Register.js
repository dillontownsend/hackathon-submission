import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Eco from '../images/eco.png'
import Logo from '../images/logo.png'

const Register = () => {
    const navigate = useNavigate()

    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async () => {
        const res = await fetch('http://localhost:4000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "company": company,
                "email": email,
                "password": password
            })
        })
        const data = await res.json()

        localStorage.setItem('token', data.token)
        navigate('/dashboard')
    }

    return (
        <>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <div className="bg-white rounded shadow-lg pb-4 px-4 md:px-8 md:pb-8 mb-6">
                            <img src={Logo} alt="" className='mx-auto' />
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600 flex flex-col items-center justify-center">
                                    <p className="font-medium text-2xl my-4">
                                        Registration
                                    </p>
                                    <p>
                                        Please fill out all the fields with your
                                        company information.
                                    </p>
                                    <img className='max-w-sm' src={Eco} alt="" />
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label htmlFor="full_name">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                name="full_name"
                                                id="full_name"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="British Petroleum"
                                                onChange={e => setCompany(e.target.value)}
                                            />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="email@domain.com"
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="email">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="***************"
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="address">
                                                Address / Street
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Address"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="city">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="City"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="country">
                                                Country / Region
                                            </label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input
                                                    name="country"
                                                    id="country"
                                                    placeholder="Country"
                                                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="state">
                                                State / Province
                                            </label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input
                                                    name="state"
                                                    id="state"
                                                    placeholder="State"
                                                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div className="md:col-span-1">
                                            <label htmlFor="zipcode">Zipcode</label>
                                            <input
                                                type="text"
                                                name="zipcode"
                                                id="zipcode"
                                                className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Zipcode"
                                            />
                                        </div>

                                        <div className="md:col-span-5 text-right mt-4">
                                            <div className="inline-flex items-end">
                                                <button className="bg-logoBlue hover:bg-logoDark text-white font-bold py-2 px-4 rounded" onClick={() => submit()}>
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
