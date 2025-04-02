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

    console.log(rate);
    
    return <div className={`${className || ''} text-yellow-300 flex items-center text-base`}>{rate === 0 ? <span className=' italic'>No Rating</span> : <>
        <span className='me-1'>{`( ${rate?.toString(10).split('').splice(0, 3).join('')} )`}</span>
        {arrOfStar}
    </>}
    </div>;
}


// 0>=4.4  1>=4.5  2>=4.6 3>=4.7 4>=4.8