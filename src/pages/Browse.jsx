import React from 'react'
import { Link } from 'react-router-dom'
import Hedder from '../components/Hedder'

const Browse = () => {
  return (
    <div className='flex'>
      <Hedder/>
     <Link to={"/"}> <h1 >logout</h1></Link>
    </div>
  )
}

export default Browse