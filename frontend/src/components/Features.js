/* This example requires Tailwind CSS v2.0+ */
import {
    GlobeIcon,
    TruckIcon,
    CurrencyDollarIcon,
    CalculatorIcon,
} from '@heroicons/react/outline'

const features = [
    {
        name: 'Track the Transportation Done by Your Company',
        description:
            'Transport Neutral allows you to track all forms of transportation done by your company. Log your delivery trucks, flights, freights, and cars.',
        icon: TruckIcon,
    },
    {
        name: 'Generate Estimate of Carbon Emissions',
        description:
            'Transport Neutral will automatically generate an estimated total amount of carbon emissions created by your company\'s transportation.',
        icon: CalculatorIcon,
    },
    {
        name: 'Donate to Carbon Fund to offset Emissions',
        description:
            'Transport Neutral will generate an amount to donate to the Carbon Fund to offset the carbon emissions created by your company\'s transportation.',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Become Carbon Neutral',
        description:
            'Offsetting your company\'s carbon emissions allows you to contribute to halting the loss of biodiversity and improving the condition of the environment.',
        icon: GlobeIcon,
    },
]

export default function Example() {
    return (
        <div className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-logoBlue font-semibold tracking-wide uppercase">
                        Features
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Offset carbon emissions created by your company's
                        transportation
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
                        Improve your company's green credentials.
                        Differentiate from the rest as an environmentally
                        responsible brand.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-logoBlue text-white">
                                        <feature.icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-white">
                                        {feature.name}
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-white">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
