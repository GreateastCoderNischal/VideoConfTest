"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavIcons=[
    { image: "/Images/search.svg", alt:"search"},
    { image: "/Images/black-heart.svg", alt:"black-heart"},
    { image: "/Images/user.svg", alt:"user"},
]

const Navbar = () => {
    return (
        <header className='w-full'>
            <nav className='flex-between p-6'>
                <Link href="/" className='flex items-center font-bold text-2xl'>
                Valor <span className="text-red-900 font-extrabold">
                    Tracker
                    </span>
                </Link>
                <div className="flex gap-4 items-center">
                    {
                        NavIcons.map(item=>(
                            <Image src={item.image} key={item.alt} alt={item.alt} className='text-white' width={35} height={35}/>
                        ))
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar