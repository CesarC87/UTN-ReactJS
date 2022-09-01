import React , {useContext} from 'react'
import CardContainer from '../../containers/CardContainer/CardContainer'
import Popular from '../Popular/Popular'
import Trending from '../Trending/Trending'
import Series from '../Series/Series'

import { Context } from '../../context/Context'

const Home = () => {

  const { queryResults } = useContext(Context)  

  return (
    <section>      
      <CardContainer />
      {
        queryResults.length === 0 ?
        <>
          <Popular/>
          <Trending/>
          <Series/>
        </> : <div></div>
      }      
    </section>
  )
}

export default Home