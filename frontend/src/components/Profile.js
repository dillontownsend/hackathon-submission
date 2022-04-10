import React from 'react'

const Profile = () => {
    return (
        <>
            <div className="bg-white w-3/4 mx-auto rounded-lg mt-36 pt-12 shadow-lg pb-4 px-4 md:px-8 md:pb-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    

                    <div className="lg:col-span-3">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                            <div className="md:col-span-5">
                                <label htmlFor="full_name">Company Name</label>
                                <input
                                    type="text"
                                    name="full_name"
                                    id="full_name"
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    placeholder="Google"
                                />
                            </div>

                            <div className="md:col-span-5">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    placeholder="email@domain.com"
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
                                <label htmlFor="state">State / Province</label>
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
                                    <button
                                        className="bg-logoBlue hover:bg-logoDark text-white font-bold py-2 px-4 rounded"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
