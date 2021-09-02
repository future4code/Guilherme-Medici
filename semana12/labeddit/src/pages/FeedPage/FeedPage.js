import React from 'react'
import Button from '@material-ui/core/Button'
import { FeedMainContainer } from './FeedStyles'
import useProtectedPage from '../../hooks/useProtectedPage'

const FeedPage = () => {

  useProtectedPage()

  return (

    <FeedMainContainer>

      <h1>FeedPage</h1>

    </FeedMainContainer>

  )
}

export default FeedPage