import React from 'react'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

export default function Rating({ rate, className }: { rate: number, className?: string }) {
    const currentRate = (rate / 2) + 0.5
    let arrOfStar = [];

    for (let i = 0; i < 5; i++) {
        // if (rate === 0) {
        //     return arrOfStar.push(<IoMdStar key={i} className='text-yellow-400' />);
        // } else
        if (i >= currentRate) {
            arrOfStar.push(<IoMdStarOutline key={i} className='text-yellow-400' />);
        } else if (i === Math.floor(currentRate)) {
            arrOfStar.push(<IoMdStarHalf key={i} className='text-yellow-400' />);
        } else {
            arrOfStar.push(<IoMdStar key={i} className='text-yellow-400' />);
        }
    }
    return <div className={`${className || ''} text-yellow-400 flex items-center text-base gap-1`}>{rate === 0 ? <span className='italic text-gray-400'>No Rating</span> : <>
        <span className='font-semibold text-yellow-300'>{`${rate?.toString(10).split('').splice(0, 3).join('')}`}</span>
        <div className="flex items-center gap-0.5">
            {arrOfStar}
        </div>
    </>}
    </div>;
}


// 0>=4.4  1>=4.5  2>=4.6 3>=4.7 4>=4.8