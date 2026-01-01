import React from 'react'
import gif from '../images/video2.gif'
import { motion } from 'framer-motion'

const New = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=''
    >
      <div className='block mt-12 pt-[5%] lg:px-[10%] px-[8%] pb-28 text-[#0B0E1F]'>
        <div className='font-bold text-[1.5rem] lg:text-[3rem] tracking-tighter leading-none text-right'>
          Maximizing Reach Unleashing the Power of <br /> Social Media Marketing for Your Business
        </div>

        <div className="grid lg:grid-cols-2 gap-8 pt-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=''
          >
            <div className='text-lg font-medium font-body '>
              "Maximizing Reach" offers tailored social media strategies for businesses, focusing on content, engagement, and analytics to boost brand presence and digital growth.
            </div>
            <div className='text-base font-normal font-body pt-4 pb-5'>
              Discover how to harness social media's dynamic landscape effectively. Elevate brand visibility, cultivate a loyal community, and drive conversions through innovative strategies outlined in "Maximizing Reach."
            </div>

            <div className='flex gap-3'>
              <div className="hint rounded-full border inline pt-2 pb-2 pr-4 pl-4 bg-slate-50">#Digital Marketing</div>
              <div className="hint rounded-full border inline pt-2 pb-2 pr-4 pl-4 bg-slate-50">#Social Media</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='h-full w-full'
          >
            <img src={gif} alt="loading..." className='rounded-lg' />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default New

