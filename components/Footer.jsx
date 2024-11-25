import React from 'react'
import Image from 'next/image';
import { imgs } from '@/Imgs/imgs';

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-gray-200 py-5 items-center'>
            <Image src={imgs.logo3} alt='' width={120}></Image>
            <p className='text-sm text-black'>All rights reserved. Copyright @Blog</p>
            <div className='flex'>
                <Image src={imgs.facebook_icon} alt='' width={40} />
                <Image src={imgs.twitter_icon} alt='' width={40} />
                <Image src={imgs.googleplus_icon} alt='' width={40} />
            </div>
        </div>
    )
}

export default Footer;