'use client'
import { testimonials } from '@/shared/constants/testiminials'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import Image from 'next/image'
import React, { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const TestiminialSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      loop: true,
      slides: {
        perView: 3,
        spacing: 15,
      },
    },
    [
      // add plugins here
    ]
  )

  return (
    <>
      <div className="w-full px-36">
        <div className="max-h-max p-6">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((review, id) => (
              <div key={id} className="keen-slider__slide flex h-96 w-80 max-w-xs flex-col justify-between rounded-2xl bg-amber-400 p-5">
                <h2 className="text-xl font-semibold">{review.text}</h2>
                <div className="flex flex-col items-center justify-center space-y-2 ">
                  <Image
                    alt="Reviewer Image"
                    src={review.imageSrc}
                    className="rounded-full"
                    height={80}
                    width={80}
                  />
                  <div className="flex items-end space-x-2">
                    <h1 className="text-xl font-semibold">{review.name}</h1>
                    <h2>{review.location}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="mx-auto flex w-full max-w-md justify-between rounded-full bg-amber-300 p-1 px-10 duration-300 ease-in-out hover:cursor-pointer hover:bg-amber-400 hover:px-20 md:min-w-max xl:max-w-4xl">
          <button
            className="rounded-xl hover:bg-amber-500"
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          >
            <HiChevronLeft
              className="text-5xl"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
          </button>
          <button
            className="rounded-xl hover:bg-amber-500"
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          >
            <HiChevronRight
              className="h-full text-5xl"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </button>
        </div>
      )}
    </>
  )
}

export default TestiminialSlider
