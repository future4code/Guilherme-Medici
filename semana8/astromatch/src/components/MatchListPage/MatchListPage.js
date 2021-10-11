import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import MatchListItem from './MatchListItem'

const ListContainer = Styled.div`
  padding: 8px;
`

function MatchListPage () {
  const [matches, setMatches] = useState ([])

  useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches').then(response => {
      console.log(response.data.matches)
      setMatches(response.data.matches)
    })
  }, [])

    return (
      <ListContainer>
        {matches.map((profile) => {
          return <MatchListItem profile={profile}/>
        })}
      </ListContainer>
    )
  
  }
  
  export default MatchListPage;
