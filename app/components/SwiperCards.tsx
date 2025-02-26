'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type SwiperType from 'swiper';
import { imgBaseUrl } from '../constants';

interface SwiperCardsProps {
    items: { card: ReactNode, src?: string }[],
    PaginationImages?: Boolean,
    className?: string,
    slidesPerView?: number,
    pauseOnMouseEnter?: boolean,
    delay?: number,
    spaceBetween?: number,
    xsSlides?: { slidesPerView: number, spaceBetween: number }
    smSlides?: { slidesPerView: number, spaceBetween: number }
    mdSlides?: { slidesPerView: number, spaceBetween: number }
    lgSlides?: { slidesPerView: number, spaceBetween: number }
}

export default function SwiperCards({ items, PaginationImages, className, pauseOnMouseEnter, spaceBetween, delay, xsSlides, smSlides, mdSlides, lgSlides }: SwiperCardsProps) {
    const [swiper, setSwiper] = useState<SwiperType | null>()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const t = setInterval(() => {
            setProgress((prev) => prev >= 100 ? 100 : prev + 2.8)
        }, 110)
        return () => clearInterval(t)
    }, [progress])

    useEffect(() => {
        swiper?.on('slideChange', () => {
            setProgress(0)
        })
    }, [swiper])


    return (
        <div>
            <Swiper
                pagination={{
                    type: 'bullets',
                }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
                // autoplay={{ delay: delay || 4000, pauseOnMouseEnter: pauseOnMouseEnter || false, }}
                spaceBetween={spaceBetween || 50}
                className={`overflow-auto w-full px-8 ${className || 'h-96'}`}
                breakpoints={{
                    0: {
                        slidesPerView: xsSlides?.slidesPerView || 1,
                        spaceBetween: xsSlides?.spaceBetween || 10,
                    },
                    640: {
                        slidesPerView: smSlides?.slidesPerView || 1,
                        spaceBetween: smSlides?.spaceBetween || 10,
                    },
                    768: {
                        slidesPerView: mdSlides?.slidesPerView || 2,
                        spaceBetween: mdSlides?.spaceBetween || 15,
                    },
                    1024: {
                        slidesPerView: lgSlides?.slidesPerView || 3,
                        spaceBetween: lgSlides?.spaceBetween || 20,
                    },
                }}
                // slidesPerView={slidesPerView || 1}
                // onSlideChange={() => console.log(swiper?.realIndex)}
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                {items?.map(({ card }, item: any) => (
                    <SwiperSlide className='h-full' key={item}>{card}</SwiperSlide>
                ))}
            </Swiper>
            <div className='flex items-center justify-center gap-4 mt-4'>
                {PaginationImages && items.map(({ src }, item: any) => (
                    <div onClick={() => {
                        swiper?.slideTo(item)
                        // swiper?.autoplay.stop()
                    }} key={item} className={`${swiper?.realIndex === item && 'shadow-md border border-rose-500 opacity-90'} rounded-xl cursor-pointer hover:-translate-y-2 transition hover:shadow-md hover:opacity-90 duration-200 z-10 overflow-hidden max-w-lg w-full h-40 relative`}>
                        {swiper?.realIndex === item && swiper?.autoplay.running && (<div style={{ width: `${progress}%` }} className='absolute duration-200 w-0 inset-0 z-10 h-full bg-black/30'></div>)}
                        {src && src !== '' ? <Image src={imgBaseUrl + src} fill alt={src} className='object-cover' /> : null}{''}
                    </div>))}
            </div>
        </div>
    )
}
