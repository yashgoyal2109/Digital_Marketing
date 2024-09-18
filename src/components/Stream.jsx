import React from 'react'
import Button from './templates/Buttons'
import { cardButton } from '../constant'
import CardButton from './templates/Cardsbuttons';
import { useAnimationFrame, useMotionValue, useTransform, wrap, motion } from "framer-motion";
import Card from './templates/Card';
import { cardContent } from '../constant';

function Stream() {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(0, -52, v)}%`);
    useAnimationFrame((t, delta) => {
        const baseVelocity = -2;
        let moveBy = baseVelocity * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });
  return (
    <>
        <section className='bg-primary_black  px-10 py-16 rounded-tr-curl gap-28'>
            <div className='flex md:items-end gap-24 justify-between '>
                {/* <img src={rocket_path} alt="" /> */}
                <h1 className='font-bold text-[5rem] md:w-[70%] text-white '>Wherever you sell, whatever you sell ... we've got you covered.</h1>
                <Button title={"Get Started"}></Button>
            </div>
            <div className='py-16 bg-primary_black'>
                {cardButton.map((group,index)=>(
                    <div className='flex gap-10 py-6 justify-center items-center'>
                        <p className='text-white'>{group.title}</p>
                        <div className="overflow-hidden border-l w-[85%] whitespace-nowrap  flex-nowrap flex">
                                <motion.div className="flex flex-nowrap gap-5 rounded-3xl"  style={{x}}>
                                    {group.buttons.map((buttonTitle, buttonIndex) => (
                                        <CardButton key={buttonIndex} title={buttonTitle.title} img={buttonTitle.img} />
                                    ))}
                                </motion.div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className='flex w-full px-20 py-16 gap-11 justify-between items-center'>
                    <h1 className='text-white text-[3.5rem] font-bold'>Get up and running in a jiff</h1>
                    <div className="md:w-1/2 flex justify-between flex-wrap md:flex-nowrap gap-10 items-center">
                    {cardContent.map((content, index) => (
                        <Card key={index} title={content.title} />
                    ))}
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Stream