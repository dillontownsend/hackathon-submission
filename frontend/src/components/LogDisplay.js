import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogDisplay = () => {
    const navigate = useNavigate()

    const [recordName, setRecordName] = useState('')
    const [date, setDate] = useState('')
    const [transportMethod, setTransportMethod] = useState('Flight')
    const [flightType, setFlightType] = useState('Domestic')
    const [boatType, setBoatType] = useState('not finished')
    const [vehicleType, setVehicleType] = useState('Diesel Truck')
    const [distance, setDistance] = useState('')

    const submit = async () => {
        if (transportMethod === 'Flight') {
            const res = await fetch('http://localhost:4000/records/flight/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "x-access-token": `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    recordName: recordName,
                    date: date,
                    flightType: flightType,
                    distance: distance
                }),
            })
            const data = await res.json()
            if (data.success) {
                navigate('/callback')
            } else {
                console.log(data)
            }
        }
        if (transportMethod === 'Boat') {
            const res = await fetch('http://localhost:4000/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recordName: recordName,
                    date: date,
                    boatType: boatType,
                    distance: distance
                }),
            })
            const data = await res.json()
            console.log(data)
        }
        if (transportMethod === 'Vehicle') {
            const res = await fetch('http://localhost:4000/records/vehicle/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "x-access-token": `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    recordName: recordName,
                    date: date,
                    vehicleType: vehicleType,
                    distance: distance
                }),
            })
            const data = await res.json()
            if (data.success) {
                navigate('/callback')
            } else {
                console.log(data)
            }
        }
    }
    return (
        <div className="mt-10 pt-12 w-8/12 mx-auto">
            <div className="">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <h2 className="text-gray-700 font-semibold text-2xl my-4">
                                Log your company's transportation and shipping
                                to calculate carbon emissions
                            </h2>
                            <div className="grid grid-cols-6 gap-6 my-12">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="email-address"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name of Record
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Record Name"
                                        className="mt-1 focus:ring-logoBlue focus:border-logoBlue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        onChange={(e) =>
                                            setRecordName(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="email-address"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        placeholder="Record Name"
                                        className="mt-1 focus:ring-logoBlue focus:border-logoBlue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        onChange={(e) =>
                                            setDate(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Method of Transportation/ Shipping
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-logoBlue focus:border-logoBlue sm:text-sm"
                                        onChange={(e) =>
                                            setTransportMethod(e.target.value)
                                        }
                                    >
                                        <option>Flight</option>
                                        <option>Boat</option>
                                        <option>Vehicle</option>
                                    </select>
                                </div>

                                {transportMethod === 'Flight' ? (
                                    <>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="last-name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Type of Flight
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-logoBlue focus:border-logoBlue sm:text-sm"
                                                onChange={(e) =>
                                                    setFlightType(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option>Domestic</option>
                                                <option>Economy</option>
                                                <option>First Class</option>
                                            </select>
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )}
                                {transportMethod === 'Boat' ? (
                                    <>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="last-name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Type of Boat
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-logoBlue focus:border-logoBlue sm:text-sm"
                                                onChange={(e) =>
                                                    setBoatType(e.target.value)
                                                }
                                            >
                                                <option>not finished</option>
                                            </select>
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )}
                                {transportMethod === 'Vehicle' ? (
                                    <>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="last-name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Type of Vehicle
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-logoBlue focus:border-logoBlue sm:text-sm"
                                                onChange={(e) =>
                                                    setVehicleType(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option>Diesel Truck</option>
                                                <option>Petrol Car</option>
                                                <option>Hybrid Car</option>
                                            </select>
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )}

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Distance in Km
                                    </label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-logoBlue focus:border-logoBlue sm:text-sm"
                                        placeholder="0km"
                                        onChange={(e) =>
                                            setDistance(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-logoBlue hover:bg-logoDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logoBlue"
                                onClick={() => submit()}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogDisplay
