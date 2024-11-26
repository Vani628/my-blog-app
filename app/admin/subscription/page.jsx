'use client'
import React from 'react'
import SubscriptionTableItem from '@/components/AdminComponents/SubscriptionTableItem'

const page = () => {
    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1>All Subscriptions</h1>
            <div className='relative h-[80vh] max-w-[600px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
            <table className='w-full text-sm text-gray-500'>
                    <thead className='text-xs text-gray-700 text-left uppercase bg-gray-50'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                Email Subscription
                            </th>
                            <th scope='col' className='hidden sm:block px-6 py-3'>
                                Date
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <SubscriptionTableItem/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page