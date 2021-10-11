import React from 'react'
import { ScreeContainer } from './PresentationStyles'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PresentationPage = () => {

  const [cards, SetCards] = useState([])

  const [imageCard, setImageCard] = useState()

  const imageCardList = () => {

    axios.get('tarot.json')
    .then((res) => {
      setImageCard(res.data)
      console.log(res.data)
    })
    .catch ((err) => {
      setImageCard(err.data)
    })

  }

  
  const CardsList = () => {

    axios.get('tarot.json')
    .then((res) => {
      SetCards(res.data.cards)
      // console.log(res.data.cards)
    })
    .catch ((err) => {
      SetCards(err.data)
    })
  }

  useEffect(() => {
    CardsList()
  }, [])

  
  const tarot = cards.map((info) => {
    return (
      <div key={info.cards}>
        <h3>{info.name}</h3>
        <img src={`${info.image}${info.image}`}></img>
      </div>
    )
  })

  return (

    <ScreeContainer>

    </ScreeContainer>

  )
}

export default PresentationPage