import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='max-w-[800px] mt-[-146px] h-screen w-full mx-auto flex flex-col text-center justify-center items-center'>
        <p className='text-accent uppercase text-center py-5'>growing with data analytics</p>
        <h2 className='text-4xl md:text-7xl sm:text-6xl font-bold'>Grow With Data</h2>
        <div className='flex justify-center items-center'>
            <p className='py-3 md:text-4xl sm:text-3xl text-2xl font-semibold'>Fast,Flexible,Financing for</p>
            <p className='py-3 pl-2 md:text-4xl sm:text-3xl text-2xl font-semibold text-accent'>
                <Typed
                    strings={['BTB','SASS','BTC']}
                    typeSpeed={100}
                    backSpeed={100}
                    loop={true}
                />
            </p>
        </div>
        <p className='text-gray-600 px-3 py-2 text-xl md:text-2xl'>Monitor your data analytics to increase revenue for BTB,BTC,SASS platform.</p>
        <button className=' bg-primaryButton w-40 h-10 rounded mt-3 text-black font-semibold'>Get Started</button>
    </div>
  )
}

export default Hero