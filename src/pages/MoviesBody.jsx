
import  Popularmovies from  './moviespages/Popularmovies'
import TopRated from './moviespages/TopRated'
import MovieList from './moviespages/MovieList'
import Top10Movies from './moviespages/Top10Movies'

const MoviesBody = () => {


  
  return (
    <div className='bg-[#110F0F]'>
     <Popularmovies/>
     <Top10Movies/>
     <TopRated/>
     <MovieList/>
     
    </div>
  )
}

export default MoviesBody