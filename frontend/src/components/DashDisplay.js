import React from 'react'
import { useEffect, useState } from 'react'
import Table from './Table'

const DashDisplay = () => {
    const [company, setCompany] = useState('')
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

        setCompany(data.company)
        setCarbonTotal(data.carbonTotal)
        setCarbonOffset(data.carbonOffset)
    }
    return (
        <div className="w-3/4 h-12 mx-auto">
            <h2 className="text-gray-700 text-6xl my-12 text-center font-medium">
                Hello, <span className='text-logoBlue'>{company}</span>
            </h2>

            <div className="flex justify-around">
                <div class="flex justify-center w-2/5 h-32 scale-110">
                    <div class="block p-6 w-full rounded-lg shadow-lg bg-white">
                        <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
                            Current Carbon Amount Positive
                        </h5>
                        <div className='w-full flex justify-around items-center'>
                            <p class="text-gray-700 text-base mb-4"><span className='text-3xl text-red-500'>{carbonTotal.toFixed(2)}</span> kg co2</p>
                            <p class="text-gray-700 text-base mb-4">$ <span className='text-3xl text-red-500'>{(carbonTotal / 250).toFixed(2)}</span></p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center w-2/5 h-32 scale-110">
                    <div class="block p-6 w-full rounded-lg shadow-lg bg-white">
                        <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
                            Total Carbon Amount Offset
                        </h5>
                        <div className='w-full flex justify-around items-center'>
                            <p class="text-gray-700 text-base mb-4"><span className='text-3xl text-logoBlue'>{carbonOffset.toFixed(2)}</span> kg co2</p>
                            <p class="text-gray-700 text-base mb-4">$ <span className='text-3xl text-logoBlue'>{(carbonOffset / 250).toFixed(2)}</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='text-gray-700 text-2xl mt-20 mb-12 font-medium'>Transportation and Shipping Logs</h2>
            <Table />
        </div>
    )
}

export default DashDisplay
