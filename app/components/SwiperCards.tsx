'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type SwiperType from 'swiper';
// import { imgBaseUrl } from '../constants';
// import Image from 'next/image';

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

export default function SwiperCards({ items, PaginationImages, className, pauseOnMouseEnter, slidesPerView, spaceBetween, delay, xsSlides, smSlides, mdSlides, lgSlides }: SwiperCardsProps) {
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
        <div className="relative group/swiper">
            <style jsx global>{`
                /* Modern Navigation Buttons */
                .swiper-button-next,
                .swiper-button-prev {
                    width: 40px !important;
                    height: 40px !important;
                    background: rgba(17, 24, 39, 0.85) !important;
                    backdrop-filter: blur(16px) !important;
                    border-radius: 50% !important;
                    border: 2px solid rgba(217, 70, 239, 0.5) !important;
                    transition: all 0.3s ease !important;
                    opacity: 0.7 !important;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
                }
                
                .swiper-button-next {
                    right: 3px !important;
                }
                
                .swiper-button-prev {
                    left: 3px !important;
                }
                
                .group\/swiper:hover .swiper-button-next,
                .group\/swiper:hover .swiper-button-prev {
                    opacity: 1 !important;
                }
                
                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    background: linear-gradient(135deg, rgba(217, 70, 239, 0.2), rgba(168, 85, 247, 0.2)) !important;
                    border-color: rgba(217, 70, 239, 0.6) !important;
                    transform: scale(1.1) !important;
                    box-shadow: 0 0 20px rgba(217, 70, 239, 0.4) !important;
                }
                
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 18px !important;
                    font-weight: bold !important;
                    color: white !important;
                }
                
                /* Disabled state - prevent click-through */
                .swiper-button-disabled {
                    opacity: 0 !important;
                    pointer-events: none !important;
                }
                
                /* Modern Pagination Bullets */
                .swiper-pagination-bullet {
                    width: 12px !important;
                    height: 12px !important;
                    background: rgba(255, 255, 255, 0.3) !important;
                    border: 2px solid rgba(255, 255, 255, 0.5) !important;
                    opacity: 1 !important;
                    transition: all 0.3s ease !important;
                }
                
                .swiper-pagination-bullet-active {
                    width: 40px !important;
                    height: 12px !important;
                    border-radius: 6px !important;
                    background: linear-gradient(90deg, #d946ef, #a855f7, #ec4899) !important;
                    border-color: rgba(217, 70, 239, 0.8) !important;
                    box-shadow: 0 0 15px rgba(217, 70, 239, 0.5) !important;
                }
                
                .swiper-pagination-bullet:hover {
                    background: rgba(255, 255, 255, 0.6) !important;
                    transform: scale(1.2) !important;
                }
                
                /* Pagination Container */
                .swiper-pagination {
                    display: flex !important;
                    justify-content: center !important;
                    gap: 6px !important;
                    z-index: 10 !important;
                }
                
                /* Hide pagination when not enough slides */
                .swiper-pagination-lock {
                    display: none !important;
                }
            `}</style>
            
            <Swiper
                pagination={{
                    clickable: true,
                    dynamicBullets: false,
                    hideOnClick: false,
                }}
                navigation={true}
                loop={items.length > 5}
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: delay || 7000, pauseOnMouseEnter: pauseOnMouseEnter || false, }}
                spaceBetween={spaceBetween || 50}
                watchSlidesProgress={true}
                className={`overflow-visible w-full px-8 pb-8 ${className || 'h-96'}`}
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
                slidesPerView={slidesPerView || 1}
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                {items?.map(({ card }, item: any) => (
                    <SwiperSlide className='h-full' key={item}>{card}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
