import React from 'react'
import { bgimage } from '../../assets'
import { pointsData } from '../../constant'
import Points from './ui/Points'
import { Link } from 'react-router-dom'
import DashNav from './DashNav'

function Home() {
    return (
        <>
            <DashNav></DashNav>
            <div className=' bg-black relative h-full'>
                <div className=''>
                    <img src={bgimage} width={3000} alt="" />
                </div>
                <div className='absolute top-1/4 left-[10%]'>
                    <div className='flex flex-col w-[70%] gap-6'>
                        <h1 className='text-white font-bold text-[2rem]'>Make Money selling on Sendowl</h1>
                        <p className='text-white'>Sell your items fast—millions of buyers are waiting.</p>
                        <Link to="/products">
                        <button className='text-black bg-white rounded-lg w-[50%] py-2'>List An Item</button>
                        </Link>
                    </div>
                </div>
                <div className='text-white px-20 flex flex-col py-6'>
                    <h1 className=' font-bold text-[2rem]'>Learn The Basics</h1>
                    <p className=''>Here's what you need to know to start selling.</p>
                    <div className='flex gap-10 py-7'>
                    {pointsData.map((content, index) => (
                        <Points key={index} title={content.title} content={content.content} />
                    ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home