import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useState, useEffect } from 'react'

export default function ProductCarousel({ images }) {
    const [current, setCurrent] = useState(0)
    const len = images.length

    // reset to first slide whenever images change
    useEffect(() => {
        setCurrent(0)
    }, [images])

    // guard so we don't wrap around
    const prev = () => {
        if (current > 0) setCurrent(current - 1)
    }
    const next = () => {
        if (current < len - 1) setCurrent(current + 1)
    }

    const canPrev = current > 0
    const canNext = current < len - 1

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center">
            {/* Slides */}
            {images.map((src, idx) => (
                <img
                    key={idx}
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-300
            ${idx === current ? 'opacity-100' : 'opacity-0'}
          `}
                />
            ))}


            <button
                onClick={prev}
                disabled={!canPrev}
                className={`
                 arrow-button–rtl 
          absolute top-1/2 left-2 -translate-y-1/2
          bg-white p-2 rounded-full shadow-lg z-10
           ${canPrev
                        ? 'hover:bg-gray-100 cursor-pointer'
                        : 'hidden cursor-not-allowed'}
        `}

                aria-label="Scroll left"
            >
                <HiChevronLeft className="w-6 h-6 text-gray-700 arrow-icon" />
            </button>
            <button
                onClick={next}

                disabled={!canNext}
                className={`
                 arrow-button–ltr 
          absolute top-1/2 right-2 -translate-y-1/2
          bg-white p-2 rounded-full shadow-lg z-10
          hover:bg-gray-100 transition
           ${canNext
                        ? 'hover:bg-gray-100 cursor-pointer'
                        : 'hidden cursor-not-allowed'}
        `}

                aria-label="Scroll right"
            >
                <HiChevronRight className="w-6 h-6 text-gray-700 arrow-icon" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-[-80px] left-0 right-0 flex justify-center space-x-4">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`
              w-2 h-2 rounded-full transition-colors cursor-pointer
                ${idx === current ? 'bg-black' : 'bg-gray-300'}
            `}
                    />
                ))}
            </div>
        </div >
    )
}
