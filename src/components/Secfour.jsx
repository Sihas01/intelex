import React from 'react'
import image from '../images/suntech-code-hub-Responsive-Design.jpg'

const Secfour = () => {
    return (
        <div className='pt-10'>
            <div className="grid grid-cols-3">
                <div className=' col-span-2'>
                    <img src={image} alt="" />
                </div>

                <div className="grid-cols-1 ">
                    <div className='font-main font-semibold text-2xl '>Responsive Designs</div>
                    <div className='font-body font-light text-base'>this is helps users to
                        access your web site
                        any device without problem</div>

                    <div>About More </div>    
                </div>
            </div>
        </div>
    )
}

export default Secfour
