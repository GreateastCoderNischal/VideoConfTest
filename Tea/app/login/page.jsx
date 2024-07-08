"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { signIn } from 'next-auth/react'


const page = () => {
  return (
    <div className='bg-emerald-950 h-screen p-8 flex items-center gap-2 flex-col'>
      <h1 className='text-3xl font-bold text-white'> Log In to Your Account</h1>
      <div className='flex flex-col gap-4 mt-6 text-black'>

        <button className="flex gap-2 bg-white rounded-xl p-3 items-center">
          <SocialIcon url='https://google.com' />
          Sign In with Google
        </button>
        <button className="flex gap-2 bg-white rounded-xl p-3 items-center">
          <SocialIcon url='https://facebook.com' />
          Sign In with Facebook
        </button>
        <button 
        className="flex gap-2 bg-white rounded-xl p-3 items-center"
        onClick={() => { signIn("github") }}
        >
          <SocialIcon url='https://github.com' />
          Sign In with github
        </button>
      </div>
    </div>
  )
}

export default page