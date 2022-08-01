import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

const Layout = ({profiles}) => {
  return (
    <>
        <Header />
        <div>
            <Routers profiles={profiles} />
        </div>
        <Footer />
    </>
  )
}

export default Layout