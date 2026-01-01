import React from 'react'
import banner3 from '../images/download.jpeg'
import arrow from '../images/arrows.png'



const Sectwo = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-10 pt-16 px-[20%] items-center">



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

                <div className="bg-black ">
                    <img src={banner3} alt="banner" className='h-[400px] w-full' />
                </div>
            </div>
        </div>
    )
}

export default Sectwo
