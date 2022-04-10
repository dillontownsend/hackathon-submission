import React, { useState } from 'react'
import LogoWhite from '../images/logo-white.png'
import {
    ChartBarIcon,
    BookOpenIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/solid'
import LogDisplay from './LogDisplay'
import DashDisplay from './DashDisplay'
import DonateDisplay from './DonateDisplay'
import ProfileDisplay from './ProfileDisplay'

const LeftMenu = () => {
    const [active, setActive] = useState('dashboard')
    return (
        <div className="flex bg-gray-200 overflow-auto">
            <div class="h-screen sticky top-0 w-56 px-4 border-r bg-gray-800 overflow-auto">
                <div class="h-1/3 pl-2 flex flex-col justify-around text-white">
                    <img src={LogoWhite} alt="logo" className="mt-16 mr-2" />

                    <hr />

                    {active === 'dashboard' ? (
                        <h3
                            class="pl-1 text-sm flex items-center py-2 my-2 bg-gray-100 text-gray-700 transition duration-200 ease-in"
                            onClick={() => setActive('dashboard')}
                        >
                            <ChartBarIcon className="h-5 w-5 mr-2" />
                            <div class="text-black transition duration-200 ease-linear">
                                Dashboard
                            </div>
                        </h3>
                    ) : (
                        <h3
                            class="pl-1 text-sm flex items-center py-2 my-2 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in"
                            onClick={() => setActive('dashboard')}
                        >
                            <ChartBarIcon className="h-5 w-5 mr-2" />
                            <div class="hover:text-black transition duration-200 ease-linear">
                                Dashboard
                            </div>
                        </h3>
                    )}

                    {active === 'log' ? (
                        <h3
                            class="pl-1 text-sm flex items-center py-2 mb-2 bg-gray-100 text-gray-700 transition duration-200 ease-in"
                            onClick={() => setActive('log')}
                        >
                            <BookOpenIcon className="h-5 w-5 mr-2" />
                            <div class="text-black transition duration-200 ease-linear">
                                Log Transportation
                            </div>
                        </h3>
                    ) : (
                        <h3
                            class="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in"
                            onClick={() => setActive('log')}
                        >
                            <BookOpenIcon className="h-5 w-5 mr-2" />
                            <div class="hover:text-black transition duration-200 ease-linear">
                                Log Transportation
                            </div>
                        </h3>
                    )}

                    {active === 'donate' ? (
                        <h3
                            class="pl-1 text-sm flex items-center py-2 mb-2 bg-gray-100 text-gray-700 transition duration-200 ease-in"
                            onClick={() => setActive('donate')}
                        >
                            <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                            <div class="text-black transition duration-200 ease-linear">
                                Donate
                            </div>
                        </h3>
                    ) : (
                        <h3
                            class="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in"
                            onClick={() => setActive('donate')}
                        >
                            <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                            <div class="hover:text-black transition duration-200 ease-linear">
                                Donate
                            </div>
                        </h3>
                    )}

                    
                </div>
            </div>
            {active === 'dashboard' ? <DashDisplay /> : <></>}
            {active === 'log' ? <LogDisplay /> : <></>}
            {active === 'donate' ? <DonateDisplay /> : <></>}
            {active === 'profile' ? <ProfileDisplay /> : <></>}
        </div>
    )
}

export default LeftMenu
