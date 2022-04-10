import React from 'react'
import Neutral from '../images/neutral.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <section class="bg-gray-200">
                
                
                <div class="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
                    <div class="container mx-auto xl:px-32">
                        <div class="grid lg:grid-cols-2 gap-12 items-center">
                            <div class="mt-12 lg:mt-0">
                                <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
                                    Get your company's transportation emissions <br />
                                    <span class="text-logoBlue">
                                    to net zero
                                    </span>
                                </h1>
                                <Link
                                    class="inline-block px-7 py-3 mr-2 bg-logoBlue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-logoDark hover:shadow-lg focus:bg-logoDark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    href="#!"
                                    role="button"
                                    to={'/register'}
                                >
                                    Register
                                </Link>
                                <Link
                                    class="inline-block px-7 py-3 bg-transparent text-logoBlue font-medium text-sm leading-snug uppercase rounded hover:text-logoDark hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    href="#!"
                                    role="button"
                                    to={'/login'}
                                >
                                    Login
                                </Link>
                            </div>
                            <div class="mb-12 lg:mb-0">
                                <img
                                    src={Neutral}
                                    class=" max-w-min h-56 rounded-lg shadow-lg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
