import React from 'react'
import banner from '../images/temps-3.jpg'
import { motion } from 'framer-motion'
import InteractiveDots from './InteractiveDots'

const Herosec = () => {
  return (
    <div className="bg-slate-950 lg:pt-10 pt-[70px] lg:h-[100vh] h-[50%] relative rounded-b-3xl">
      <div className="relative h-full w-full bg-slate-950">
        <InteractiveDots />
        <div className="relative h-full w-full ">
          <div className="hidden lg:block absolute bottom-0 lg:left-[-20%] right-0 lg:top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="hidden lg:block absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

          <div className='lg:pt-36 pt-14 pb-10 grid gap-y-2'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='lg:px-[14%] px-[8%] text-center font-title2 z-10'
            >
              <h1 className=' text-[#eaebec] font-medium lg:text-[81px] md:text-[75px] text-[3.5rem]'>Digital Marketing And </h1>
              <h1 className=' text-[#eaebec] font-medium text-[3.0rem] md:text-[75px] lg:text-[81px] mt-[-10px]'>Creative <span className='text-purple-400'>Collaboration</span>.</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className='text-[#dfecfa] text-center relative text-[10px] lg:text-[16px] lg:pb-0 pb-11'
            >
              Intelex is a leading company to Improve Your Business The only solution<br />
              that combines an AI chatbot, help desk, and <br />
            </motion.div>
          </div>

          <div className='relative z-5 hidden'>
            <div className='color '></div>
            <div className="colorTwo mx-[70%] mt-[-35%] "></div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className='lg:w-[998px] w-[90%] mx-[auto] relative z-10 translate-y-[50%]'
          >
            <img src={banner} className='rounded-lg shadow-2xl' alt="Banner" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Herosec
