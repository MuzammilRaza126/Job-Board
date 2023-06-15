import { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
  children: ReactNode
  hideNavbar?: boolean
  hideFooter?: boolean
}

const Layout = ({ children, hideNavbar, hideFooter }: LayoutProps) => {
  return (
    <div className="h-[100vh]">
      <div className=''>{!hideNavbar && <Navbar />}</div>
      <div className="">{children}</div>
      <div className=''>{!hideFooter && <Footer />}</div>
    </div>
  )
}

export default Layout
