import React from 'react'
import { imgs } from '@/Imgs/imgs'
import Image from 'next/image'

const BlobTableItem = ({title,author}) => {
    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image src={imgs.profile} alt='' width={40}/>
                <p>{author?author:"No author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title?title:"No Title"}
            </td>
            <td className='px-6 py-4'>
                {"25 Nov 2024"}
            </td>
            <td className='px-6 py-4 cursor-pointer'>
                x
            </td>
        </tr>
    )
}

export default BlobTableItem