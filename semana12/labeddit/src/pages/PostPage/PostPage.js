import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'


const PostPage = () => {
  
  useProtectedPage()

  return (
  
  <div>
    <input></input>
      <button>Postar</button>
  </div>
  
  )
}

export default PostPage