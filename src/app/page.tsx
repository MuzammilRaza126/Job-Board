import TestiminialSlider from '@/components/Home/TestiminialSlider'
import Header from '@/components/Layout/Header'

export default function Home() {
  return (
    <>
      <main className="h-full p-8">
        <div className="relative h-full w-full">
          <Header />
          <TestiminialSlider />
        </div>
      </main>
    </>
  )
}
