import React, { useEffect, useState } from 'react'
import axios from '../axios'
const Row = ({title , fetchUrl , isLarge}) => {
  const [movie,setmovie] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original"
  // Fetch data from API
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl)
      setmovie(request.data.results)
      return request
    }
    fetchData()
  },[fetchUrl])
  console.log(movie)
  return (
    <div className='  ml-5'>
      <h2 className=' text-white font-bold text-2xl '>{title}</h2>

      <div  className=' flex scrollbar-hide overflow-y-hidden overflow-x-scroll p-5'>
      {movie.map(movie=>(
        <img  className={`max-h-[100px] rounded-sm object-contain hover:scale-[1.10] duration-300 ml-2 ${
          isLarge ? 'max-h-[250px] rounded-md object-contain ml-2 hover:scale-[1.15] duration-300  ' : '' 
        }`} key={movie.id} src={`${base_url}${
          isLarge ? movie.poster_path : movie.backdrop_path
        }`} alt={movie.name} />
      ))}
      </div>
      
    </div>
  )
}

export default Row
// style={{ overflowX: 'scroll', overflowY: 'hidden'}}