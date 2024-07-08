import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UserButton,SignedIn } from '@clerk/nextjs'
const Navbar = () => {
  return (
      <div className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 '>
      <Link href="/" className='flex items-center gap-2'>
        <Image
          src={"/icons/logo.svg"}
          width={32}
          height={32}
          alt='Home'
        />
        <span className='text-2xl text-white font-bold'>Valor-Zoom</span>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

    </div>
  )
}

export default Navbar