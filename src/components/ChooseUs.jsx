import React from 'react';
import aws from "../images/aws.svg";
import azure from "../images/azure.svg";
import js from "../images/js-1.svg";
import ts from "../images/typescript.svg"
import saas from '../images/sass.svg'
import jquery from '../images/jquery.svg'





const ChooseUs = () => {
  return (
    <div className='px-[5%] md:px-[10%] lg:px-[10%] bg-[#0B0E1F] pb-16 pt-16'>
      <h1 className='text-white font-bold tracking-tighter leading-none text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center'>Our Tech & Services: <span className='text-purple-400'>Driving Innovation</span> </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14'>
        
          <div  className='p-6 text-[#dfecfa] rounded-lg'>
            <img src={aws} alt="" />
            <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl'>Amazon Web Services</h3>
            <p className='font-normal text-sm md:text-base lg:text-lg'>Certified developers to help build, deploy, and manage your cloud processes.</p>
          </div>

          <div  className='p-6 text-[#dfecfa] rounded-lg'>
            <img src={azure} alt="" />
            <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl'>Amazon Web Services</h3>
            <p className='font-normal text-sm md:text-base lg:text-lg'>Certified developers to help build, deploy, and manage your cloud processes.</p>
          </div>

          <div  className='p-6 text-[#dfecfa] rounded-lg'>
            <img src={js} alt="" />
            <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl'>Amazon Web Services</h3>
            <p className='font-normal text-sm md:text-base lg:text-lg'>Certified developers to help build, deploy, and manage your cloud processes.</p>
          </div>

          <div  className='p-6 text-[#dfecfa] rounded-lg'>
            <img src={ts} alt="" />
            <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl'>Amazon Web Services</h3>
            <p className='font-normal text-sm md:text-base lg:text-lg'>Certified developers to help build, deploy, and manage your cloud processes.</p>
          </div>

          <div  className='p-6 text-[#dfecfa] rounded-lg'>
            <img src={saas} alt="" />
            <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl'>Amazon Web Services</h3>
            <p className='font-normal text-sm md:text-base lg:text-lg'>Certified developers to help build, deploy, and manage your cloud processes.</p>
          </div>


          <div  className='p-6 text-[#dfecfa] rounded-lg'>
            <img src={jquery} alt="" />
            <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl'>Amazon Web Services</h3>
            <p className='font-normal text-sm md:text-base lg:text-lg'>Certified developers to help build, deploy, and manage your cloud processes.</p>
          </div>
   
      </div>

      <h4 className='text-center text-[#dfecfa] pt-10'>100+ More</h4>
    </div>
  )
}

export default ChooseUs;
