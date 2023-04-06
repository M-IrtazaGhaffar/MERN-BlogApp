import React from 'react'

function Newsletter() {
  return (
    <div>
        <div className='bg-red-500 text-white flex items-center justify-between py-16 px-7 flex-wrap gap-7'>
            <h3 className='text-3xl'>
                Want HiPost News and Updates?
                <br />
                Subscribe to our News-letter
            </h3>
            <div>
                <div className='flex items-center gap-2 flex-wrap'>
                <input type="email" name="email" placeholder='Enter your email' className='rounded-lg bg-red-400 border border-none placeholder:text-white' />
                <button className='bg-white text-red-700 text-sm p-2 rounded-md font-bold'>
                    Subscribe
                </button>
                </div>
                <p className='text-xs p-1'>
                    We care about your data.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter