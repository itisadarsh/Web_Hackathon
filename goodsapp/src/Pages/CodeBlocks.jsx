import React from 'react'
// import HighlightText from './HighlightText'
// import CTAButton from './CTAButton'
import { FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import {TypeAnimation} from 'react-type-animation';


const CodeBlocks = ({position,heading,subheading,ctabtn1,ctabtn2,codeblock,backgroundGradient,codeColor}) => {
  return (
    <div className={`flex ${position}  my-20 justify-between gap-10 `}>
          <div className='lg:w-[50%] flex flex-col gap-8'>
        {heading}
        <div className='text-richblack-300 font-bold'>{subheading}</div>
        <div className='flex gap-8 mt-7'>

        {/* <CTAButton  active={ctabtn1.active} Linkto={ctabtn1.Linkto}> */}
      <NavLink   to={"/signup"}> <div className='flex gap-2 items-center'>
            {ctabtn1.btnText}
            <FaArrowRight/>
        </div>
        </NavLink> 
        {/* </CTAButton> */}
            
       {/* <button></button>  active={ctabtn2.active} Linkto={ctabtn2.Linkto}>
            {ctabtn2.btnText} */}
      
        
        
        
        </div>
    
         </div>
            <div className={`lg:w-[50%] flex h-fit py-4 gap-5 text-left  ${backgroundGradient} rounded-lg`}>

    

        <div className={`w-[90%] flex flex-col gap-2 font-bold pr-2  text-2xl font-mono ${codeColor} `}>

        <TypeAnimation

            sequence={[codeblock,5000,""]}
            repeat={Infinity}
            cursor={true}
            style={{
                whiteSpace:"pre-line",
                position:"relative",
                left:"-10px",
                font:"44px"
            }}
            omitDeletionAnimation={true}
        />
        </div>
            </div>



    </div>
  )
}

export default CodeBlocks