'use client'
import React , {useEffect} from 'react'
import { useState } from 'react';
import { blog_data } from '@/Imgs/imgs';
import Image from 'next/image';
import { imgs } from '@/Imgs/imgs';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useDynamicRouteParams } from 'next/dist/server/app-render/dynamic-rendering';

const page = ({params}) => {

    const [data,setData]=useState(null);

    useEffect(() => {
        const fetchBlogData = () => {
          for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
              setData(blog_data[i]);
              console.log(blog_data[i]);
              break;
            }
          }
        };
        fetchBlogData();
      }, [params.id]); // Add 'params.id' to dependencies to ensure the hook is safe.
    
      if (!data) {
        return <div>Loading...</div>; // Add a loading state while `data` is null.
      }

    // const fetchBlogData=()=>{
    //     for(let i=0;i<blog_data.length;i++){
    //         if(Number(params.id)===blog_data[i].id){
    //             setData(blog_data[i]);
    //             console.log(blog_data[i]);
    //             break;
    //         }
    //     }
    // }

    // useEffect(() => {
    //         fetchBlogData();
    // }, []);
    return (data?<>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Link href='/'> 
                    <Image src={imgs.logo3} width={180} alt='' className='w-[130px] sm:w-auto'/>
                    </Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                        Get Started <Image src={imgs.arrow} width={30} alt=''/>
                    </button>
                </div>
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                    <Image  className='mx-auto mt-6' src={data.author_img} width={60} height={60} alt=''/>
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                </div>
            </div>
            <div className='mx-5 max-w-[600px] md:mx-auto mt-[-100px] mb-10'>
                <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
                <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
                <p >{data.description}</p>
                <h3 className='my-5 text-[18px] font-semibold'> Content</h3>
                <p className='my-3'>Productivity begins with effective time management. Start by setting clear, achievable goals. Break larger tasks into smaller, actionable steps to avoid feeling overwhelmed. Tools like to-do lists, calendars, and task management apps can help organize your priorities.</p>
                <p className='my-3'>Additionally, maintaining focus is critical. Minimize distractions by creating a dedicated workspace and setting boundaries during work hours. Techniques like the Pomodoro method—working in intervals with short breaks—can improve focus and prevent burnout.</p>
                <p className='my-3'>Equally important is the role of physical and mental well-being. Adequate sleep, regular exercise, and a balanced diet can significantly impact your energy levels and concentration. Incorporating mindfulness practices such as meditation can further enhance clarity and reduce stress.</p>
                <h3 className='my-5 text-[18px] font-semibold'> Conclusion</h3>
                <p className='my-3'>Productivity is not about doing more but about doing what matters most. By setting clear goals, managing your time effectively, and maintaining a healthy lifestyle, you can create a sustainable balance that supports long-term success. Start small, stay consistent, and watch as your productivity transforms your daily routine.</p>

                <div className='my-24'>
                    <p className='text-black font font-semibold my-4'> Share this article on Social media</p>
                    <div className='flex'>
                        <Image src={imgs.facebook_icon} width={50} alt=''/>
                        <Image src={imgs.twitter_icon} width={50} alt=''/>
                        <Image src={imgs.googleplus_icon} width={50} alt=''/>
                    </div>
                </div>
            </div>
            <Footer/>
            </>:<></>
    )
}
export default page;

