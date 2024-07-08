import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='relative'>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <section className="flex min-h-screen flex-1 flex-col x-6 b-6 pt-20 px-6">
                    <div className="w-full">
                        {children}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomeLayout