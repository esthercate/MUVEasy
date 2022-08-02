import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

const Layout = ({profiles, user}) => {
  return (
    <>
      <Header user={user} />
      <div>
        <Routers profiles={profiles} user={user} />
      </div>
      <Footer />
    </>
  );
}

export default Layout