import React from 'react'
import { logo, patternstars } from '../assets'
import { Link } from 'react-router-dom'


function Signup() {
    return (
        <>
            <div className=' bg-black flex flex-col gap-4'>
                <div className=' flex items-center'>
                    <Link to="/"><img src={logo} width={100} height={300} alt="" /></Link>
                    <img src={patternstars} width={3000} alt="" />
                </div>
                <div className=' flex flex-col '>
                    <div className='flex flex-col gap-3 px-[30rem] py-3'>
                        <p className='text-white font-bold'>NAME</p>
                        <input type="text" placeholder="Enter" className=' border  py-2 font-semibold bg-black border-1-white text-white' />
                    </div>
                    <div className='flex flex-col gap-3 px-[30rem] py-3'>
                        <p className='text-white font-bold'>EMAIL ADDRESS</p>
                        <input type="text" placeholder="Enter" className=' border py-2 font-semibold bg-black text-white' />
                    </div>
                    <div className='flex flex-col gap-3 px-[30rem] py-3'>
                        <p className='text-white font-bold border-white'>COUNTRY</p>
                        <input type="text" placeholder="Enter" className=' border py-2 font-semibold bg-black border-white text-white' />
                    </div>
                    <div className='flex flex-col gap-3 px-[30rem] py-3'>
                        <p className='text-white font-bold'>PASSWORD</p>
                        <input type="text" placeholder="Enter" className='  border py-2 font-semibold  bg-black border-1-white text-white' />
                    </div>
                    <div className='flex flex-col gap-3 px-[30rem] py-3'>
                        <p className='text-white font-bold'>CONFIRM PASSWORD</p>
                        <input type="text" placeholder="Enter" className='border py-2 font-semibold bg-black border-1-white text-white' />
                    </div>

                    <div className='flex flex-col items-center pb-10'>
                        <p className='text-white py-10'>By clicking Sign Up, you agree to our <span className='text-primary_green'>Terms of Service</span> & <span className='text-primary_green'>Privacy Policy</span></p>
                        <Link to="/buyorsell">
                            <button type="submit" className='text-black bg-primary_green py-2 px-[15rem]'>Sign Up</button>
                        </Link>
                        <p className='text-white'>Already have an account?<Link to="/signin"><button className='text-primary_green'>Log In</button></Link></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup