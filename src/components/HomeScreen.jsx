import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from '../requests'
const HomeScreen = () => {
  return (
    <div className=' bg-[#111]'>
      <Nav />
      <Banner/>
      <Row
      title = 'NETFLIX ORIGNALS'
      fetchUrl={requests.fetchNetflixOriginals}
      isLarge
      />
      <Row
      title = 'Trending Now'
      fetchUrl={requests.fetchTrending}
      
      />
      <Row
      title = 'Top Rated'
      fetchUrl={requests.fetchTopRated}
      
      />
      <Row
      title = 'Action Movies'
      fetchUrl={requests.fetchActionMovies}
      
      />
      <Row
      title = 'Comedy Movies'
      fetchUrl={requests.fetchComedyMovies}
      
      />
      <Row
      title = 'Horror Movies'
      fetchUrl={requests.fetchHorrorMovies}
      
      />
      <Row
      title = 'Documentaries'
      fetchUrl={requests.fetchDocumentaries}
      
      />
      <Row
      title = 'Romance Movies'
      fetchUrl={requests.fetchRomanceMovies}
      
      />
    </div>
  )
}

export default HomeScreen
