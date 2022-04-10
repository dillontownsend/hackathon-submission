import React from 'react'

const Card = ({ record }) => {
    console.log(record)
    return (
        <>
            <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="flex items-center">
                        <div class="ml-4">
                            <div class="text-sm leading-5 font-medium text-gray-900">
                                {record.recordName}
                            </div>
                        </div>
                    </div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-900">
                        {record.date}
                    </div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                        {record.method}
                    </span>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-red-500">
                    {record.carbon.toFixed(2)} kg co2
                </td>

                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"></td>
            </tr>
        </>
    )
}

export default Card
