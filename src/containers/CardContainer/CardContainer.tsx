import React , { useContext } from 'react'
import Card from '../../components/Card/Card'
import { Context } from '../../context/Context'

import './CardContainer.scss'

const CardContainer = () => {

  const { setQuery, data } = useContext(Context)  
  const imageUrl = 'https://image.tmdb.org/t/p/original'
  

  const handleQuerySearch = (e:any) => {
    setQuery(e.target.value)    
  }

  return (
    <>
    <input type="text" onChange={(e)=>handleQuerySearch(e)}/>
    <div className='cardContainer'>
      {
        data?.map( (film:any) => {
          let { poster_path } = film;
          return <Card image={`${imageUrl+poster_path}`}/>
        })
      }
    </div>
    </>
  )
}

export default CardContainer