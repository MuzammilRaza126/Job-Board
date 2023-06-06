'use client'
import Image from 'next/image'
import React from 'react'

const Slider: React.FC = () => {
  return (
    <div className="p-24">
      <div className="mx-auto flex h-[560px] w-full items-center justify-center rounded-2xl bg-[#C6DAE5] p-10">
        <div className="flex h-full max-w-xl flex-col justify-between">
          <h1 className="text-5xl font-bold leading-snug tracking-wide text-[#004f6d]">
            <span className="text-amber-400">
              The #1 Job Board Platform to find remote jobs!
            </span>
            - no ads, scams, or junk. Find your next flexible, hybrid, or work
            from home job.
          </h1>
          <div className="space-x-5 text-2xl font-bold text-white ">
            <button className="rounded-lg bg-amber-400 p-2 duration-300 ease-in-out hover:text-amber-600">
              Let's get your job
            </button>
            <button className="rounded-lg border-2 p-2 duration-300 ease-in-out hover:bg-amber-300 hover:text-amber-600">
              Find Best Talent
            </button>
          </div>
        </div>
        <div className="max-w-lg">
          <Image
            alt="Go to Job"
            src="/images/goto-job.png"
            width={480}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default Slider
