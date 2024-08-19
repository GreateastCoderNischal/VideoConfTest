"use client"

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroImages = [
    { src: '/assets/images/hero-1.svg', name: "Hero-1" },
    { src: '/assets/images/hero-5.svg', "name": "hero-5" },
    { src: '/assets/images/hero-3.svg', "name": "hero-3" },
    { src: '/assets/images/hero-4.svg', "name": "hero-4" },
]

export default function HeroCarousel() {
    return (
        <div className="max-w-[300px] h-[300px] mx-2 relative">
            <Carousel
            showStatus={false}
                showThumbs={false}
                autoPlay
                infiniteLoop
                showArrows={false}
            >
                {HeroImages.map((item, index) => (
                    <div key={index} className="flex items-center justify-center h-[350px] bg-gray-400">
                        <Image
                            src={item.src}
                            width={200}
                            height={200}
                            className="object-contain max-h-full"
                            alt={item.name}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}