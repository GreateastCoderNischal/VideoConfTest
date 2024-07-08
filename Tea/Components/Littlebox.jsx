import React from 'react'

const Littlebox = ({ title, src, comments }) => {
    return (
        <div className="items-center space-y-3 flex flex-col justify-center">
            <img className="rounded-full bg-slate-400 p-2" src={src} width="88" />
            <p className="font-bold">{title}</p>
            <p className="text-center">{comments}</p>
        </div>
    )
}

export default Littlebox