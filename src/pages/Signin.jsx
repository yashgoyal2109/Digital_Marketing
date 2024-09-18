import React from 'react'
import { logo, patternstars } from '../assets'
import { Link } from 'react-router-dom'

function Signin() {
    return (
        <>
            <div className='bg-black h-screen flex flex-col gap-4'>

                <div className=' flex items-center'>
                    <Link to="/"><img src={logo} width={100} height={300} alt="" /></Link>
                    <img src={patternstars} width={3000} alt="" />
                </div>

                <div className='flex flex-col items-center gap-7'>
                    <h1 className='text-white font-semibold text-[2rem]'>
                        Sign in to your account
                    </h1>
                    <div className='flex flex-col gap-3'>
                        <p className='text-white font-bold'>EMAIL ADDRESS</p>
                        <input type="text" placeholder="Enter" className=' border py-2 font-semibold bg-black border-1-white text-white' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-white font-bold'>PASSWORD</p>
                        <input type="text" placeholder="Enter" className='w-full border py-2 font-semibold bg-black border-1-white text-white' />
                    </div>
                    <div className='flex flex-col items-center pb-10'>
                        <Link to="/buyorsell">
                            <button className='text-black bg-primary_green py-2 px-[15rem]'>Sign In</button>
                        </Link>
                        <p className='text-white'>Don't have an account?<Link to="/signup"><button className='text-primary_green'>Sign Up</button></Link></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signin