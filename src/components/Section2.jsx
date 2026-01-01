import React from 'react'
import banner2 from '../images/banner-redimensionat.jpg'
import gif from '../images/video1.gif'
import { motion } from 'framer-motion'

const Section2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='block md:mt-14 mt-[30%] lg:mt-[30%] lg:px-[10%] px-[8%]'
    >
      <div className='font-bold lg:text-[3rem] text-[1.5rem] tracking-tighter leading-none text-[#0B0E1F]'>
        Boost Your Online Presence<br /> Effective Web Development Solutions for Business Success
      </div>

      <div className="grid lg:grid-cols-2 gap-8 pt-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='h-full w-full'
        >
          <img src={gif} alt="loading..." className='rounded-lg' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=''
        >
          <div className='text-lg font-medium font-body text-[#0B0E1F]'>
            Revamp your online presence with our expert web development solutions, captivating visitors and boosting conversions for business success.
          </div>
          <div className='text-base font-normal font-body pt-4 pb-5 text-[#0B0E1F]'>
            Revitalize your online presence with our expert web development solutions, captivating visitors and boosting conversions for business growth and success
          </div>
          <div className='flex gap-3'>
            <div className="hint rounded-full border inline pt-2 pb-2 pr-4 pl-4 bg-slate-50">#Web Design</div>
            <div className="hint rounded-full border inline pt-2 pb-2 pr-4 pl-4 bg-slate-50">#Modern Technology</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Section2
