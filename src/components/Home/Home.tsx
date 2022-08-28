import React from 'react'
import CardContainer from '../../containers/CardContainer/CardContainer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <section>
      <Header/>
      <CardContainer />
      <Footer/>
    </section>
  )
}

export default Home