import React from 'react'
import aws from "../images/aws.svg";


const Technology = () => {
  return (
    <div className='px-[16%] bg-[#0B0E1F] pb-16 pt-16'>
      <h1 className='text-white font-bold tracking-tighter leading-none text-[3rem]'>Our Tech & Services: Driving Innovation</h1>

        <div className='grid grid-cols-3 gap-6 pt-14'>
            <div className='bg-[#1D2341] p-6 text-[#dfecfa] rounded-lg'>
                <img src={aws} alt="" />
                <div className='font-extrabold text-[20px]'>Amazon Web Services</div>
                <p className='font-normal text-[15px]'>Certified developers to help build, deploy, and manage your cloud processes.</p>
            </div>
            
            
            <div className='bg-[#1D2341] p-6 text-[#dfecfa] rounded-lg'>
                <img src={aws} alt="" />
                <h3 className='font-extrabold text-[20px]'>Amazon Web Services</h3>
                <p className='font-normal text-[15px]'>Certified developers to help build, deploy, and manage your cloud processes.</p>
            </div>
            
            <div className='bg-[#1D2341] p-6 text-[#dfecfa] rounded-lg'>
                <img src={aws} alt="" />
                <h3 className='font-extrabold text-[20px]'>Amazon Web Services</h3>
                <p className='font-normal text-[15px]'>Certified developers to help build, deploy, and manage your cloud processes.</p>
            </div>
        </div>

        <div className='grid grid-cols-3 gap-6 pt-14'>
            <div className='bg-[#1D2341] p-6 text-[#dfecfa] rounded-lg'>
                <img src={aws} alt="" />
                <h3 className='font-extrabold text-[20px]'>Amazon Web Services</h3>
                <p className='font-normal text-[15px]'>Certified developers to help build, deploy, and manage your cloud processes.</p>
            </div>
            
            
            <div className='bg-[#1D2341] p-6 text-[#dfecfa] rounded-lg'>
                <img src={aws} alt="" />
                <h3 className='font-extrabold text-[20px]'>Amazon Web Services</h3>
                <p className='font-normal text-[15px]'>Certified developers to help build, deploy, and manage your cloud processes.</p>
            </div>
            
            <div className='bg-[#1D2341] p-6 text-[#dfecfa] rounded-lg'>
                <img src={aws} alt="" />
                <h3 className='font-extrabold text-[20px]'>Amazon Web Services</h3>
                <p className='font-normal text-[15px]'>Certified developers to help build, deploy, and manage your cloud processes.</p>
            </div>
        </div>

        <h4 className='text-center text-[#dfecfa] pt-10'>100+ More</h4>

    </div>
  )
}

export default Technology
