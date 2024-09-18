import React from 'react'
import { facebook, insta, logo, tiktok, x, youtube } from "../assets";
import { footerContent } from '../constant';


function Footer(props) {
    return (
        <>
            <footer className={`pt-[2rem] pb-[5rem] px-10 md:px-[5rem] text-white font-heading bg-${props.color} flex flex-col gap-5 justify-start`}>
                <img src={logo} width={40} alt="" />
                <div className="flex flex-col md:flex-row justify-between flex-wrap gap-10 md:gap-[15%]">
                    <div className="flex flex-col gap-3">
                        <h1>Follow us</h1>
                        <div className="flex gap-1">
                            <img src={facebook} className="rounded-md" alt="" />
                            <img src={x} className="rounded-md" alt="" />
                            <img src={youtube} className="rounded-md" alt="" />
                            <img src={insta} className="rounded-md" alt="" />
                            <img src={tiktok} className="rounded-md" alt="" />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-between flex-wrap gap-5">
                        {footerContent.map((content) => (
                            <div className="flex flex-col gap-3">
                                <h1 className='text-primary_green font-bold text-[1.2rem]'>{content.heading.toUpperCase()}</h1>
                                {content.content.map((item) => (
                                    <p>{item.title}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer