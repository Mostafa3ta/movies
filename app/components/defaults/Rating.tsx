import React from 'react'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

export default function Rating({ rate, className }: { rate: number, className?: string }) {
    const stars = [];
    const starCount = rate / 2; // Convert 0-10 to 0-5
    
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(starCount)) {
            stars.push(<IoMdStar key={i} />);
        } else if (i === Math.ceil(starCount) && starCount % 1 !== 0) {
            stars.push(<IoMdStarHalf key={i} />);
        } else {
            stars.push(<IoMdStarOutline key={i} />);
        }
    }
    
    return (
        <div className={`flex items-center gap-2 text-base ${className || ''}`}>
            {rate === 0 || !rate ? (
                <span className="italic text-gray-400">No Rating</span>
            ) : (
                <>
                    <span className="font-semibold text-yellow-300">{rate.toFixed(1)}</span>
                    <div className="flex items-center gap-0.5 text-yellow-400">
                        {stars}
                    </div>
                </>
            )}
        </div>
    );
}


// 0>=4.4  1>=4.5  2>=4.6 3>=4.7 4>=4.8