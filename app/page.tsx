import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
    return (
        <>
            <section className="px-6 py-1 flex">
                <div className="flex flex-col py-8">
                    <p className="text-sm flex gap-2 text-blue-600">
                        Start Your Shopping
                        <Image
                            src={"/Images/arrow.svg"}
                            width={20}
                            height={20}
                            alt={"arrow"}
                        />
                    </p>
                    <h1 className='text-4xl tracking-wide font-bold m-2'>Unleash the Power of
                        <span className="text-red-600 ml-1">
                            Valor-Tracker</span>
                    </h1>
                    <p className="mt-6">
                        Powerful, Self-Helping, perfect use of technology and Money Saver that will help you to find the cheapest price for the product you want
                    </p>
                    <Searchbar />
                </div>
                <HeroCarousel />

            </section>
            <section className="p-8 flex flex-wrap gap-8">
                {['apple', "Iphone", "Keyboard", "Laptop", "Desktop"].map(item => (
                    <div className="" key={item}>
                        {item}
                    </div>
                ))}
            </section>
        </>
    )
}

export default Home