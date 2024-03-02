import React from 'react'
import FirstBG from '../assets/firstBG.jpg';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Main = () => {

    function clickHandler(){
        toast.error('UNDER-PROCESSING');
    }


  return (
    <div className=' flex items-center w-11/12 max-w-[1160px] p-6 justify-between  mx-auto'>

        <div  className='flex flex-col gap-7 max-w-[450px] text-xl font-semibold w-full'>
    
            

                <button className='bg-[#415c96] text-white uppercase  border-solid rounded-[8px] hover:bg-richblack-25 duration-200 font-medium hover:text-richblack-900 hover:scale-105 px-[12px] py-[8px] mt-6' >
                <Link to={'/Pan'}>
                Apply Pan Card
                
                </Link>
                
                </button>



            <button onClick={clickHandler} className='bg-[#415c96] text-white uppercase  border-solid rounded-[8px] hover:bg-richblack-25 duration-200 font-medium hover:text-richblack-900 hover:scale-105 px-[12px] py-[8px] mt-6'>
            <Link to={'/'}>
            Apply Adhar Card
            </Link>
            </button>

            

            <button onClick={clickHandler} className='bg-[#415c96] text-white uppercase  border-solid rounded-[8px] hover:bg-richblack-25 duration-200 font-medium hover:text-richblack-900 hover:scale-105 px-[12px] py-[8px] mt-6'>
            <Link to={'/'}>
            
            
            Apply Driving Licence
            
            </Link>
            </button>

        </div>

        <div>
            <img src={FirstBG} className='  h-[450px] w-[450px]'/>
        </div>

    </div>
  )
}

export default Main