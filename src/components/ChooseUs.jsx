import React from 'react';
import aws from "../images/aws.svg";
import azure from "../images/azure.svg";
import js from "../images/js-1.svg";
import ts from "../images/typescript.svg"
import saas from '../images/sass.svg'
import jquery from '../images/jquery.svg'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ChooseUs = () => {
  const techData = [
    { img: aws, title: "Amazon Web Services", desc: "Certified developers to help build, deploy, and manage your cloud processes." },
    { img: azure, title: "Microsoft Azure", desc: "Cloud computing service created by Microsoft for building, testing, deploying, and managing applications." },
    { img: js, title: "JavaScript", desc: "Expert JS development to create interactive and dynamic web applications." },
    { img: ts, title: "TypeScript", desc: "Scalable and robust development using strongly typed JavaScript." },
    { img: saas, title: "SaaS Solutions", desc: "Building scalable software as a service applications tailored to your needs." },
    { img: jquery, title: "jQuery", desc: "Optimizing web interactions and simplified DOM manipulation." }
  ];

  return (
    <div className='px-[5%] md:px-[10%] lg:px-[10%] bg-[#0B0E1F] pb-16 pt-16'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-white font-bold tracking-tighter leading-none text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center'
      >
        Our Tech & Services: <span className='text-purple-400'>Driving Innovation</span>
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14'
      >
        {techData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className='p-6 text-[#dfecfa] rounded-lg bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 transition-colors cursor-pointer'
          >
            <img src={item.img} alt={item.title} className="mb-4" />
            <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl'>{item.title}</h3>
            <p className='font-normal text-sm md:text-base lg:text-lg opacity-80'>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className='text-center text-[#dfecfa] pt-10'
      >
        100+ More
      </motion.h4>
    </div>
  )
}

export default ChooseUs;
