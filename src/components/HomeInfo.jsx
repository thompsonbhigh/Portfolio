import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({link, text, btnText}) => (
    <div className='sm:text-xl sm:leading-snug text-center bg-[#493D9E] rounded-md py-4 px-8 text-[#DAD2FF] mx-5'>
        <p className='font-medium sm:text-xl text-center mb-10'>{text}</p>
        <Link to={link} className='bg-[#B2A5FF] text-white rounded-md text-center pr-[10vh] pl-[10vh] p-[1vh]'>
            {btnText}
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center bg-[#493D9E] rounded-md py-4 px-8 text-[#DAD2FF] mx-5">
            Hi, I am <span className='font-semibold'>Thompson</span>
            <br/>
            A Computer Science Student at Texas A&M
        </h1>
    ),
    2: (
        <InfoBox 
            text='I have been interested in computing ever since I was little'
            link='/about'
            btnText='Read more →'
        />
    ),
    3: (
        <InfoBox 
            text='I have built projects and plan on building many more'
            link='/projects'
            btnText="See what I've done →"
        />
    ),
    4: (
        <InfoBox 
            text='I was able to build this with the help of some amazing 3D modelers'
            link='/credits'
            btnText='Check them out →'
        />
    )
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo