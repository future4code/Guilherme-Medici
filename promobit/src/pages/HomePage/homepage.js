import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import {goToDetailsPage, goToGenreListPage} from "../../routes/Coordinator"
import axios from "axios"
import { MovieContainer, ImgStyled, TextStyled } from "./HomePageStyles"
import { BASE_URL } from "../../constants/urls"

const HomePage = () => {

  const history = useHistory()

  const [movies, setMovies] = useState([])

  let [pages, setPages] = useState(1)

  const getAllMovies = () => {
    axios
    .get(`${BASE_URL}movie/popular?api_key=8d7af322012977f386d6d3be374ef76d&page=${pages}`)
    .then((res) => {
      setMovies(res.data.results)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  const handlePageChange = () => {
    setPages(pages + 1)
  }

  useEffect(() => {
    getAllMovies()
  }, [pages])

  const details = (id) => {
    goToDetailsPage(history,id)
  }

  const showMovies = movies && movies.map((i) => {
    return (
      <div onClick={() => details(i.id)}>
        <ImgStyled src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`}/>
        <TextStyled>{i.original_title}</TextStyled>
      </div>
    )
  })

  const clickGenres = () => {
    goToGenreListPage(history)
  }

  return (

      <div>
          <button onClick={()=>handlePageChange(pages)}>
            Change pages
          </button>

          <button onClick={() => clickGenres(history)}>
            Genre list
          </button>
          <MovieContainer>
            {showMovies}
          </MovieContainer>
      </div>
  )
}

export default HomePage