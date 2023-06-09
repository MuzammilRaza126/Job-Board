import TestiminialSlider from '@/components/Home/TestiminialSlider'
import Header from '@/components/Layout/Header'
import Layout from '@/components/Layout/Layout'

export default function Home() {
  return (
    <>
      <Layout>
        <main className="h-full p-8">
          <div className="relative h-full w-full">
            <Header />
            <TestiminialSlider />
          </div>
        </main>
      </Layout>
    </>
  )
}
