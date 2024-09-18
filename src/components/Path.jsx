import { rocket_path, rocket, stars } from "../assets";
import { companyCard } from "../constant";
import { useAnimationFrame, useMotionValue, useTransform, wrap, motion } from "framer-motion";


import React from 'react'

function Path() {

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(0, -52, v)}%`);
  useAnimationFrame((t, delta) => {
    const baseVelocity = -2;
    let moveBy = baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <>
      <div className="bg-primary_black">
        <div className="flex flex-col items-center justify-center">
          <img src={stars} width={3000} height={3000} alt="" />
          <div className="absolute">
            <img src={rocket_path} width={600} alt="" />
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-[3rem] md:w-[600px]">SendOwl sellers have made multiple</p>
            <p className="text-primary_green font-bold text-[3rem] md:w-[600px]"> billions of dollars</p>
          </div>
          <div className="absolute right-[25rem]">
            <img src={rocket} width={160} alt="" />
          </div>
          <img src={stars} width={3000} height={3000} alt="" />
        </div>
      </div>
      <div className=' bg-primary_black border'>
        {companyCard.map((group, index) => (
          <div className='grid grid-cols-[300px_1fr] border'>
            <p className='text-white p-6 text-[2rem] font-bold'>{group.title}</p>
            <div className=" overflow-hidden border-l h-full flex justify-center items-center">
              <div className="overflow-hidden w-[95%] whitespace-nowrap  flex-nowrap flex">
                <motion.div className="flex flex-nowrap gap-[10rem] rounded-3xl" style={{ x }}>
                  {group.images.map((buttonTitle, buttonIndex) => (
                    <img src={buttonTitle.img} width={110}  height={110} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Path