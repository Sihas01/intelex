import React from 'react'
import banner from '../images/temps-3.jpg'

const Herosec = () => {
  return (
    <div className="bg-[#0B0E1F] lg:pt-10 pt-[70px] lg:h-[100vh] h-[50%] relative rounded-b-3xl ">
      <div class="relative h-full w-full bg-slate-950"><div class=" absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div class="relative h-full w-full "><div class="hidden lg:block absolute bottom-0 lg:left-[-20%] right-0 lg:top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="hidden lg:block absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
     <div className='lg:pt-36 pt-14 pb-10 grid gap-y-2'>
      <div className='lg:px-[14%] px-[8%] text-center font-title2 z-10'>
        <h1 className=' text-[#eaebec] font-medium lg:text-[81px] md:text-[75px] text-[3.5rem]'>Digital Marketing  And </h1>
        <h1 className=' text-[#eaebec] font-medium text-[3.0rem] md:text-[75px] lg:text-[81px] mt-[-10px]'>Creative <span className='text-purple-400'>Collaboration</span>.</h1>
      </div>


<div className='text-[#dfecfa] text-center relative text-[10px] lg:text-[16px] lg:pb-0 pb-11'>
      Intelex is a leading company to Improve Your Business The only solution<br />
       that combines an AI chatbot, help desk, and <br />
      </div>
     </div>

   

     <div className='relative z-5 hidden'>
     <div className='color '></div>
     <div className="colorTwo mx-[70%] mt-[-35%] "></div>
     </div>

    
        <div className='lg:w-[998px] w-fit  mx-[auto] '>
          <img src={banner} className='rounded-lg'/>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Herosec
