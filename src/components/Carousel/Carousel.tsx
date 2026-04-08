'use client'
import React, {useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type {EmblaOptionsType} from 'embla-carousel'

type CarouselProps = {
    slides: React.ReactNode[]
    options?: EmblaOptionsType
    slidesPerView?: 'auto' | number
}

export const Carousel = ({slides, options, slidesPerView = 1}: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false, align: 'start', ...options})

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    return (
        <div className={'relative'}>
            <div className={'overflow-hidden'} ref={emblaRef}>
                <div className={'flex gap-6 touch-pan-y'}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={'shrink-0'}
                            style={{
                                flexBasis: slidesPerView === 'auto'
                                    ? 'auto'
                                    : `calc((100% - ${(+slidesPerView - 1) * 1.5}rem) / ${slidesPerView})`
                            }}
                        >
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className={'absolute -left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-rumi-light text-white hover:bg-rumi disabled:opacity-30 z-10'}
                aria-label="Назад"
            >
                ‹
            </button>
            <button
                onClick={scrollNext}
                className={'absolute -right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-rumi-light text-white hover:bg-rumi disabled:opacity-30 z-10'}
                aria-label="Вперёд"
            >
                ›
            </button>
        </div>
    )
}
