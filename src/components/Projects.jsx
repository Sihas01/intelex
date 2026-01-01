import React from 'react'
import imageOne from '../images/5e5a34_cd5caba5b514499cbc81c7b442974928~mv2.webp';
import imageTwo from '../images/create-your-professional-business-website.png';
import imageThree from '../images/modern-website-design-examples.jpg';
import imageFour from '../images/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg'
import imageFive from '../images/create-a-minimal-looking-website-that-fits-perfectly.png'
import imageSix from '../images/f012b766e2a2f66ee40e531edbb7ea76-a514e6b0aebfabe8ec9fdb49d175489d16721604653717.jpg';

const Projects = () => {
  return (
    <div className='mt-[8%]'>

        <div className='text-center font-semibold font-main text-3xl'>
            PROJECTS
        </div>
      <div className="set1 h-1/2 grid grid-cols-3 gap-3 pt-5">
        <div className='pt-14'>
            <img src={imageOne} alt="" />
        </div>

        <div className='pt-9'>
            <img src={imageTwo} alt="" />
        </div>

        <div>
            <img src={imageThree} alt="" />
        </div>
      </div>

      <div className="set2 h-1/2 grid grid-cols-3 gap-3 pt-5">
        <div className='pt-14'>
            <img src={imageFour} alt="" />
        </div>

        <div className='pt-9'>
            <img src={imageFive} alt="" />
        </div>

        <div>
            <img src={imageSix} className='h-fit' alt="" />
        </div>
      </div>


     
    </div>
  )
}

export default Projects
