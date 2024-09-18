import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion';
import { arrow_right } from "../assets/index"
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <>
            <Navbar />
            <div className='bg h-screen flex flex-col justify-center font-heading items-center py-3'>
                <div className='h-full text-white flex flex-col gap-[4rem] items-center pt-[5rem]'>
                    <motion.div
                        animate={{ y: ["0%", "20%", "0%"] }}
                        transition={{ ease: "easeInOut", repeat: Infinity, duration: 1 }}
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="123"
                            viewBox="0 0 100 123"
                            style={{ width: "100%", height: "100%", contentVisibility: "visible" }}
                        >
                            <defs>
                                <clipPath id="__lottie_element_2">
                                    <path d="M0 0H100V123H0z"></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#__lottie_element_2)">
                                <g display="block">
                                    <motion.path
                                        d="M-18-376.5v15.803"
                                        transform="matrix(.5 0 0 .5 66.75 270.586)"
                                        animate={{ pathLength: [0, 1, 0] }}
                                        transition={{ ease: "easeInOut", repeat: Infinity, duration: 1 }}
                                    ></motion.path>
                                    <motion.path
                                        fill="none"
                                        stroke="#04CF86"
                                        strokeLinecap="round"
                                        strokeWidth="11"
                                        d="M-18-376.5v15.803"
                                        transform="matrix(.5 0 0 .5 66.75 270.586)"
                                        animate={{ pathLength: [0, 1, 0] }}
                                        transition={{ ease: "easeInOut", repeat: Infinity, duration: 1 }}
                                    ></motion.path>
                                </g>
                                <g display="block">
                                    <motion.path
                                        d="M-18-376.5v26.696"
                                        transform="matrix(.5 0 0 .5 59 270.586)"
                                        animate={{ pathLength: [0, 1, 0] }}
                                        transition={{ ease: "easeInOut", repeat: Infinity, duration: 1}}
                                    ></motion.path>
                                    <motion.path
                                        fill="none"
                                        stroke="#04CF86"
                                        strokeLinecap="round"
                                        strokeWidth="11"
                                        d="M-18-376.5v26.696"
                                        transform="matrix(.5 0 0 .5 59 270.586)"
                                        animate={{ pathLength: [1, 0, 1] }}
                                        transition={{ ease: "easeInOut", repeat: Infinity, duration: 1 }}
                                    ></motion.path>
                                </g>
                                <g display="block">
                                    <motion.path
                                        d="M-18-376.5v17.292"
                                        transform="matrix(.5 0 0 .5 51.25 270.586)"
                                        animate={{ pathLength: [0, 1, 0] }}
                                        transition={{ ease: "easeInOut", repeat: Infinity, duration: 1 }}
                                    ></motion.path>
                                    <motion.path
                                        fill="none"
                                        stroke="#04CF86"
                                        strokeLinecap="round"
                                        strokeWidth="11"
                                        d="M-18-376.5v17.292"
                                        transform="matrix(.5 0 0 .5 51.25 270.586)"
                                        animate={{ pathLength: [0, 1, 0] }}
                                        transition={{ ease: "easeInOut", repeat: Infinity, duration: 1 }}
                                    ></motion.path>
                                </g>
                                <path
                                    fill="#04CF86"
                                    d="M47.719 19.671C42.265 11.737 32.934 2.527 30.199-.113 27.631-43.258 5.819-61.973 0-61.973c-5.819 0-27.631 18.715-30.199 61.86-2.735 2.64-12.066 11.85-17.52 19.784a7.778 7.778 0 00-1.374 4.412v18.513c0 2.755 2.711 4.691 5.316 3.797l16.508-5.663a233.11 233.11 0 003.491 15.768 7.302 7.302 0 007.063 5.475h33.43a7.303 7.303 0 007.064-5.475 233.085 233.085 0 003.49-15.768l16.508 5.663c2.605.894 5.316-1.042 5.316-3.797V24.083c0-1.579-.48-3.111-1.374-4.412zM0 2.435c-6.373 0-11.539-5.166-11.539-11.539 0-6.373 5.166-11.539 11.539-11.539 6.373 0 11.539 5.166 11.539 11.539C11.539-2.731 6.373 2.435 0 2.435z"
                                    display="block"
                                    transform="matrix(.5 0 0 .5 50 43.75)"
                                ></path>
                            </g>
                        </motion.svg>
                    </motion.div>
                    <div className='text-white gap-4 text-left md:text-center flex flex-col items-center md:w-[650px]'>
                        <h1 className='text-[3.2rem] font-bold font-heading'>The simplest and fastest way to sell digital products</h1>
                        <p className='text-[1.4rem] font-heading'>Sell where your audience already is.</p>
                        <Link to="signup">
                            <button className='flex gap-2 bg-primary_green text-black py-4 px-9 rounded-md font-bold font-heading'>Get started
                                <img src={arrow_right} alt="" />
                            </button>
                        </Link>
                    </div>
                    <div className='flex gap-10'>
                        <p className="font-semibold text-white text-center text-[1.2rem]">Get set up in 20 seconds</p>
                        <p className="font-semibold text-white text-center text-[1.2rem]">Sell directly to your customers</p>
                        <p className="font-semibold text-white text-center text-[1.2rem]">Sell directly to your customers</p>
                    </div>
                </div>
            </div >


        </>

    )
}

export default Hero