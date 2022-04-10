import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DonateDisplay = () => {
    const [carbonTotal, setCarbonTotal] = useState(0.0)
    const [carbonOffset, setCarbonOffset] = useState(0.0)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await fetch('http://localhost:4000/records', {
            headers: {
                'x-access-token': `${localStorage.getItem('token')}`,
            },
        })
        const data = await res.json()

        setCarbonTotal(data.carbonTotal)
        setCarbonOffset(data.carbonOffset)
    }

    const submit = async () => {
        const res = await fetch('http://localhost:4000/users/donated', {
            method: "PUT",
            headers: {
                'x-access-token': `${localStorage.getItem('token')}`,
            }
        })
    }
    return (
        <>
            <div class="mx-auto w-2/4">
                <div class="w-full mt-24 m-auto lg:mt-32">
                    <div class="bg-white shadow-2xl rounded-3xl">
                        <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">
                            Donation Summary
                        </h2>
                        <div class="w-5/6 m-auto">
                            <p class="text-center text-gray-500 pt-5">
                                This is the current amount of carbon emissions
                                that you have not offset with a donation.
                                Donating this amount will make your company
                                carbon neutral and set this balance to 0.
                            </p>
                        </div>
                        <div class=" items-center w-72 lg:w-5/6 m-auto bg-red-50 mt-5 p-4 lg:p-4 rounded-2xl">
                            <div className="w-full flex justify-around items-center">
                                <p class="text-gray-700 text-base mb-4">
                                    <span className="text-3xl text-red-500">
                                        {carbonTotal.toFixed(2)}
                                    </span>{' '}
                                    kg co2
                                </p>
                                <p class="text-gray-700 text-base mb-4">
                                    ${' '}
                                    <span className="text-3xl text-red-500">
                                        {(carbonTotal / 250).toFixed(2)}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="bg-logoBlue w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-logoDark rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                            <a href='https://carbonfund.org/donate/' class="lg:text-sm text-lg font-bold" onClick={() => submit()}>
                                Proceed to Donation
                            </a>
                        </div>
                        <div class="text-center m-auto mt-6 w-full h-16">
                            <Link to={'/callback'} class="text-gray-500 font-bold lg:text-sm hover:text-gray-900">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonateDisplay
