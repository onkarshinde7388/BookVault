import React from 'react'

const Banner = () => {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row py-10'>
   <div className='md:w-1/2 w-full mt-32 order-2 md:order-1'>
   <div className='space-y-12'>
   <h1 className='text-4xl font-bold'>Hello Welcome to learn <span className='text-pink-500'>new Things!!</span></h1>
   <p className='text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam facilis, quas hic recusandae voluptatum maiores
   </p>
   <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
   </div>
   <button className='btn mt-6 btn-secondary'>Get Started</button>
   </div>
   
   
   <div className=' order-1 md:w-1/2 w-full'>
   <img src="/Banner.png" alt="banner" className=' md:pt-16 ml-[30px] w-120 h-120' />
   </div>
   </div>
   </>
  ) 
}

export default Banner 