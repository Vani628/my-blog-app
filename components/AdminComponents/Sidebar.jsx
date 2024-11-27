// import React from 'react'
// import Image from 'next/image';
// import { imgs } from '@/Imgs/imgs';
// import Link from 'next/link';

// const Sidebar = () => {
//     return (
//         <div className='flex flex-col bg-slate-100'>
//             <div className='px-2 sm:pl-14 py-3 border border-black'>
//               <Link href='/'>
//                 <Image src={imgs.logo4} width={120} alt=''/>
//                </Link>
//             </div>
//             <div className='w-38 sm:w-80 h-[100vh] relative py-12 border border-black'>
//                 <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    
//                     <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
//                        <Image src={imgs.add} alt='' width={38} /><p>Add Blogs</p>
//                     </Link>

//                     <Link href='/admin/blogList' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
//                        <Image src={imgs.blog} alt='' width={38} /><p>Blog List</p>
//                     </Link>

//                     <Link href='/admin/subscription' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
//                        <Image src={imgs.email} alt='' width={38} /><p>Subscription</p>
//                     </Link>
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default Sidebar;

import React from 'react';
import Image from 'next/image';
import { imgs } from '@/Imgs/imgs';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 '>
                <Link href='/'>
                    <Image src={imgs.logo4} width={120} alt='' />
                </Link>
            </div>
            <div className='w-38 sm:w-80 h-[100vh] relative py-12 '>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>

                    {/* Add Blogs Button */}
                    <Link 
                        href='/admin/addProduct' 
                        className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'
                    >
                        <Image src={imgs.add} alt='' width={38} />
                        <p className='hidden sm:block'>Add Blogs</p>
                    </Link>

                    {/* Blog List Button */}
                    <Link 
                        href='/admin/blogList' 
                        className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'
                    >
                        <Image src={imgs.blog} alt='' width={38} />
                        <p className='hidden sm:block'>Blog List</p>
                    </Link>

                    {/* Subscription Button */}
                    <Link 
                        href='/admin/subscription' 
                        className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'
                    >
                        <Image src={imgs.email} alt='' width={38} />
                        <p className='hidden sm:block'>Subscription</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
