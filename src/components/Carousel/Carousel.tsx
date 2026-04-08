'use client'
import React, {useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type {EmblaOptionsType} from 'embla-carousel'

type CarouselProps = {
    slides: React.ReactNode[]
    options?: EmblaOptionsType
    slideClassName?: string
}

export const Carousel = ({slides, options, slideClassName = 'basis-full'}: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false, align: 'start', ...options})

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    return (
        <div className={'relative'}>
            <div className={'overflow-hidden'} ref={emblaRef}>
                <div className={'-ml-4 flex'}>
                    {slides.map((slide, index) => (
                        <div key={index} className={`min-w-0 shrink-0 grow-0 pl-4 ${slideClassName}`}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className={'absolute -left-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 text-2xl rounded-full bg-rumi-light text-white hover:bg-rumi z-10'}
                aria-label="Назад"
            >
                ‹
            </button>
            <button
                onClick={scrollNext}
                className={'absolute -right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 text-2xl rounded-full bg-rumi-light text-white hover:bg-rumi z-10'}
                aria-label="Вперёд"
            >
                ›
            </button>
        </div>
    )
}
