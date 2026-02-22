import usePopularmovies from '../../hooks/UsePopularmovies'
import { useDispatch, useSelector } from 'react-redux'
import {  Popular_Movies } from '../../utils/constant'
import MovieCards from '../../components/MovieCards'
import CardTitle from '../../components/CardTitle'
import { addIdTonavigateMoviePlay } from '../../utils/trandingMovies'
import { useNavigate } from 'react-router-dom'

const Popularmovies = () => {
  const dispatch= useDispatch()
  const navigate = useNavigate()
  usePopularmovies()

  const moviesSelecter = useSelector(
    (store) => store.newMovies.popularmovies
  )
  const handelmoviedetail= (id)=>{
        dispatch(addIdTonavigateMoviePlay(id))
    
    navigate('/moviePlay')
    
  }

  if (!moviesSelecter) return null

  return (
    <div className='w-full px-6 -mt-[15%]  relative z-20'>
      <CardTitle title={Popular_Movies} />


      <div className='flex overflow-x-scroll space-x-4 scrollbar-hide'>
        {moviesSelecter.map((movie) => (
          <MovieCards path={movie.poster_path} title={movie.title} handelClick ={()=>handelmoviedetail(movie.id)} />
        
        ))}
      </div>
    </div>
  )
}

export default Popularmovies
