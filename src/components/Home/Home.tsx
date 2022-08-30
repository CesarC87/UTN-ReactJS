import React , {useContext} from 'react'
import CardContainer from '../../containers/CardContainer/CardContainer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Popular from '../Popular/Popular'
import Trending from '../Trending/Trending'
import Series from '../Series/Series'

import { Context } from '../../context/Context'

const Home = () => {

  const { queryResults } = useContext(Context)  

  return (
    <section>
      <Header/>
      <CardContainer />
      {
        queryResults.length === 0 ?
        <>
          <Popular/>
          <Trending/>
          <Series/>
        </> : <div></div>
      }
      <Footer/>
    </section>
  )
}

export default Home