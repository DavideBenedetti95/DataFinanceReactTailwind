import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-3'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter and stay up to date</p>
          </div>
          <div className='my-4'>
            <div className='flex flex-col items-center justify-between w-full sm:flex-row'>
              <input type="email" placeholder='Enter Email' className='p-3 mr-5 w-full flex rounded-md text-black'/>
              <button className='bg-accent text-black w-40 h-10 rounded-md mt-3 font-semibold'>Notify Me</button>
            </div>
            <p className='mt-3'>We care about the protection of your data. <span className='text-accent'>Read our Privacy Policy</span></p>  
          </div>
        </div>
    </div>
  )
}

export default Newsletter