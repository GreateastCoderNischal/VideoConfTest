import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface HomeCardProps{
    className:string,
    img:string,
    title:string,
    description:string,
    handleClick:()=>void
}

const HomeCard = ({className,img,title,description,handleClick}: HomeCardProps) => {
    return (
        <div onClick={() => {handleClick()}}
            className={cn("px-4 py-6 flex flex-col justify-between w-full cursor-pointer rounded-lg",className)}>
            <div className="flex-center size-12 rounded-lg">
                <Image src={img}
                    alt='Meetings'
                    width={27}
                    height={27} />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl font-bold'>{title}</h1>
                <h4 className="text-xl font-normal">{description}</h4>
            </div>
        </div>
    )
}

export default HomeCard