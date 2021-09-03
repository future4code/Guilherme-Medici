import React from 'react'
import { FeedMainContainer } from './FeedStyles'
import useProtectedPage from '../../hooks/useProtectedPage'
import MediaCard from '../../components/Cards/CardPost'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'

const FeedPage = () => {

  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)
  useProtectedPage()

  const postCard = posts.map((post) => {
    return (
      <p>
        {post.body}
      </p>
    )
  })


  return (

    <FeedMainContainer>

      <h1>FeedPage</h1>

      <MediaCard />
      <MediaCard />
      <MediaCard />

      {postCard}

    </FeedMainContainer>

  )
}

export default FeedPage