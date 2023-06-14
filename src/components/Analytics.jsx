import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='analytics'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
          <div className='flex flex-col justify-center'>
            <p className='text-accent font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='text-black md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
            <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam exercitationem, repellendus, quaerat omnis repudiandae, eius ipsum ad ullam magnam sequi totam dolore iste eos sint dolorem. Blanditiis fuga eum rem.</p>
            <button className=' bg-black w-40 h-10 rounded mt-3 text-accent font-semibold'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Analytics