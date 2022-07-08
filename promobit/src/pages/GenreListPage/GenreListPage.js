import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HeadTitle, MainContainer } from './GenreListPageStyle'

const GenreListPage = () => {

  const [genre, setGenre] = useState([])

  const getGenre = () => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=8d7af322012977f386d6d3be374ef76d&language=en-US`)
      .then((res) => {
        setGenre(res.data.genres)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    getGenre()
  }, [])

  const movieGenreList = genre && genre.map((i) => {
    return (<div key={i.id}>{i.name}</div>)
  })
  

  return (

    <MainContainer>
      <HeadTitle>
        <h2>List of genres</h2>
      </HeadTitle>
      {movieGenreList}
    </MainContainer>
  )
}

export default GenreListPage