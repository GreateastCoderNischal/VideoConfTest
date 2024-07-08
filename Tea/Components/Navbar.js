"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';

const Navbar = () => {
    const { data: session } = useSession();
    const [show, setShow] = useState(false);


    useEffect(() => {
        document.addEventListener("click", () => {
            if (show) setShow(false);
        });
    }, [show])
    return (
        <div className='h-14 bg-slate-950 text-white p-4 flex items-center justify-between'>
            <span className="text-xl font-bold tracking-wide">
                Get Me Tea
            </span>
            <div className="flex items-center gap-3 text-white cursor-pointer">
                <Link href={'/'}>
                    <span className='cursor-pointer'>Home</span>
                </Link>
                <span className='cursor-pointer'>Contact</span>
                <span className='cursor-pointer'>Order</span>
                {session ? (
                    <div className='relative'>
                        <Image
                            className="rounded-full cursor-pointer"
                            src={session.user?.image}
                            height={30}
                            width={30}
                            alt="User Image"
                            onClick={() => setShow(prev => !prev)}
                        />
                        {show && (

                            <span className='absolute top-full w-[88px] text-center mt-2 right-0 bg-lime-900 rounded-xl font-bold p-2 cursor-pointer' onClick={signOut}>Log Out</span>

                        )}
                    </div>
                ) : (
                    <Link href={"/login"}>
                        <span className='cursor-pointer p-2 bg-lime-900 rounded-xl font-bold'>Login</span>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
