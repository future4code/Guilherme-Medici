import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { MainContainer, MovieBox, MovieTitle, Detail, ButtonContainer, StyledButton } from './DetailsPageStyle'
import { goToHomePage } from '../../routes/Coordinator'

const DetailsPage = () => {

  const history = useHistory()
  const params = useParams()

  const [synopsis, setSynopsis] = useState({})

  const getSynopsis = () => {
    axios
    .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8d7af322012977f386d6d3be374ef76d&language=en-US`)
    .then((res) => {
      setSynopsis(res.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  useEffect(() => {
    getSynopsis()
  }, [])

  const clickButton = () => {
    goToHomePage(history)
  }

  const genres = synopsis.genres
  const number = synopsis.budget
  const budgetAmount = (new Intl.NumberFormat().format(number))
  const moviesByGenre = genres && genres.map((i) => {
    return (<div ley={i.id}>{i.name}</div>)
  })

  const time = () => {
    const runtime = synopsis && synopsis.runtime
    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60

    return (`${hours}h: ${minutes} min`)

  }

  return (

      <MainContainer>
          <MovieBox><img src={`https://image.tmdb.org/t/p/w500/${synopsis.poster_path}`} />
            <MovieTitle><b>{synopsis.title}</b></MovieTitle>
            <div><b>Budget: </b>US$ {budgetAmount}</div>
            {moviesByGenre && <div><b>Movie Genres:</b> {moviesByGenre[0]} {moviesByGenre[1]} {moviesByGenre[2]}</div>}
            <Detail><b>Movie Detail:</b>{synopsis.overview}</Detail>
            <div><b>Status:</b>{synopsis.status}</div>
            <div><b>Tagline:</b>{synopsis.tagline}</div>
            <div><b>Runtime:</b>{time()}</div>
            <div><b>Vote Average:</b>{synopsis.vote_average}</div>
          </MovieBox>
          <ButtonContainer>
            <StyledButton onClick={() => clickButton(history)}>Back</StyledButton>
          </ButtonContainer>
      </MainContainer>
  )
}

export default DetailsPage