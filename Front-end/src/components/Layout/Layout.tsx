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
      {!hideNavbar && <Navbar />}
      <div className="">{children}</div>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
