import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='px-[16%] pt-14 leading-none text-center pb-36'
    >
      <div className='font-bold text-[3rem] text-[#0B0E1F]'>How can we help?</div>
      <div className='font-bold text-[3rem] text-[#0B0E1F]'>Talk to our experts today. </div>

      <div className="login text-[#24272a] pt-14">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='border px-6 py-3 font-body font-medium inline-block cursor-pointer hover:bg-slate-50 transition-colors'
        >
          GET STATED
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
