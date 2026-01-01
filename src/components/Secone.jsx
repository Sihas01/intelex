import React from 'react'
import banner2 from '../images/banner-redimensionat.jpg'
import arrow from '../images/arrows.png'

const Secone = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 pt-[25%] px-[20%] items-center">

        <div className="bg-black">
          <img src={banner2} alt="banner" />
        </div>

        <div className="">
          <div className='font-main font-semibold text-[26px]'>Customize Yor Design  For You</div>
          <div className='font-body font-light w-80 pt-5 '>We Customize Your web site  as the thing in your mind. ChatGPT is a free-to-use AI system. Use it for engaging conversations, gain insights, automate tasks, and witness the future of AI, all in one place. </div>
          <div className='pt-4 flex gap-3'>
            <div>
              GET STARTED
            </div>

            <div className='h-6 w-16'>
              <img src={arrow} alt="" />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Secone
