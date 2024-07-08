import React from 'react'
import Littlebox from './Littlebox'
const Box = () => {
    return (
        <div className="p-3 flex justify-center flex-col gap-3 items-center text-white">
            <span className="text-xl font-bold">
                Yours fans can buy you a tea
            </span>
            <div className="flex gap-5 justify-around">
                <Littlebox title="Fund Yourself" comments="Your fans are available for you to help you" src="https://getmeachai.vercel.app/main.gif" />
                <Littlebox
                    src="https://getmeachai.vercel.app/coin.gif" width="88"
                    title="Fund Yourself"
                    comments="Your fans are available for you to help you"
                />
                <Littlebox
                    src="https://getmeachai.vercel.app/group.gif"
                    title="Fans want to help"
                    comments="Your fans are available for you to help you"
                />
            </div>
        </div>
    )
}

export default Box