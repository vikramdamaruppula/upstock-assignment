import React from 'react'
import Header from './Header'
import Investors from './Investors'
import Footer from './Footer'
import InvestmentSection from './InvestmentSection'
import UplearnSection from './UplearnSection'


const Homepage = ({setIsAuthenticated}) => {
  return (
    <div>
      <Header setIsAuthenticated={setIsAuthenticated} />
      <Investors />
      <InvestmentSection />
      <UplearnSection />
      <Footer />
    </div>
  )
}

export default Homepage