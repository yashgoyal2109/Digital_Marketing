import React from 'react'
import { logo, patternstars } from '../assets'
import { Link } from 'react-router-dom'
import { buyorsellcontent } from '../constant'
import Card from './templates/Card'

function BuyorSell() {
    return (
        <>
            <div className='bg-black h-screen'>
                <div className=' flex items-center'>
                    <Link to="/"><img src={logo} width={100} height={300} alt="" /></Link>
                    <img src={patternstars} width={3000} alt="" />
                </div>
                <div className='flex gap-10 text-center p-[5rem] justify-around items-center'>
                        {buyorsellcontent.map((content, index) => (
                            <Card key={index} index={index} title={content.title} />
                        ))}
                </div>
            </div>
        </>
    )
}

export default BuyorSell