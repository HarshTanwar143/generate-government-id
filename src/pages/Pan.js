import React from 'react'
import { useState } from 'react';
import SecondBG from '../assets/secondFIG.png';


const Pan = () => {


  const [formData,setFormData] = useState({fullName : '' ,dob : '', fatherName : '',adhar : '',address : '', mobile : ''});


  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData(prevFormData => {    
      return {
        ...prevFormData ,
        [name] : type === "checkbox" ? checked : value     // it is syntax
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log('finally printing the whole data of form :: ');
    console.log(formData);
  }




  return (
    <div>

        <div className=' flex items-center w-11/12 max-w-[1160px] p-6 justify-between  mx-auto'>
            <form onSubmit={submitHandler} className='flex  flex-col  -space-y-6  w-[400px]'>

            <label>
                <p className='text-[1rem] text-violet-500 font-semibold  mt-8 -mb-[15px]  leading-[1.375rem]'>
                Enter Full Name <sup className=' text-pink-200'>*</sup></p>
                <br/>

                <input 
                required
                type='text' 
                placeholder='Full Name' 
                name='fullName' 
                value={formData.fullName} 
                onChange={changeHandler}
                className=' rounded-[0.5rem] placeholder-black opacity-75
                p-[12px] border border-transparent w-full  border-richblack-200'
                />
            </label>

            <br/>

            
            <label>
                <p className='text-[1rem] text-violet-500 font-semibold  mt-8 -mb-[15px]  leading-[1.375rem]'>
                Enter DOB <sup className=' text-pink-200'>*</sup></p>
                <br/>

                <input 
                required
                type='date' 
                placeholder='Enter DOB' 
                name='dob' 
                value={formData.dob} 
                onChange={changeHandler}
                className=' rounded-[0.5rem] placeholder-black opacity-75
                p-[12px] border border-transparent w-full  border-richblack-200'
                />
            </label>

            <br/>

                 
            <label>
                <p className='text-[1rem] text-violet-500 font-semibold  mt-8 -mb-[15px]  leading-[1.375rem]'>
                Enter Mobile Number <sup className=' text-pink-200'>*</sup></p>
                <br/>

                <input 
                required
                type='number' 
                placeholder='Enter Mobile Number' 
                name='mobile' 
                value={formData.mobile} 
                onChange={changeHandler}
                className=' rounded-[0.5rem] placeholder-black opacity-75
                p-[12px] border border-transparent w-full  border-richblack-200'
                />
            </label>

            <br/>

            <label>
                <p className='text-[1rem] text-violet-500 font-semibold  mt-8 -mb-[15px]  leading-[1.375rem'>
                Enter Father Name <sup className=' text-pink-200'>*</sup>
                </p>

                <br/>

                <input 
                required
                type='text' 
                placeholder='Father Name' 
                name='fatherName' 
                value={formData.fatherName} 
                onChange={changeHandler}
                className='  rounded-[0.5rem] placeholder-black opacity-75
                p-[12px] border border-transparent w-full  border-richblack-200'
                />

            </label>

            <br/>

            <label>
            <p className='text-[1rem] text-violet-500 font-semibold  mt-8 -mb-[15px]  leading-[1.375rem'>
                Enter Adhar Number  <sup className=' text-pink-200'>*</sup>
                </p>

                <br/>
                
                <input 
                required
                type='number' 
                placeholder='Last 4-Digits Of Adhar' 
                name='adhar' 
                value={formData.adhar} 
                onChange={changeHandler}
                className='  rounded-[0.5rem] placeholder-black opacity-75
                p-[12px] border border-transparent w-full  border-richblack-200'                />
            </label>

                <br/>

                
            <label>
            <p className='text-[1rem] text-violet-500 font-semibold  mt-8 -mb-[15px]  leading-[1.375rem'>
                Enter Address <sup className=' text-pink-200'>*</sup>
                </p>

                <br/>
                
                <input 
                required
                type='text' 
                placeholder='Enter Address' 
                name='address' 
                value={formData.address} 
                onChange={changeHandler}
                className='  rounded-[0.5rem] placeholder-black opacity-75
                p-[12px] border border-transparent w-full  mb-6 border-richblack-200'    />
            </label>

            <br/>
            
            <button className=' bg-yellow-50 rounded-[8px] hover:bg-richblack-25 duration-200 font-medium text-richblack-900 hover:scale-95 px-[12px] py-[8px] mt-6'>
                SUBMIT
            </button>


            </form>

            <div>
                <img src={SecondBG} className='  h-[450px] w-[450px]' />
            </div>
            
        </div>


    </div>
  )
}

export default Pan





