import React from 'react'

function Article ({ name, article }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{article}</p>
    </div>
  )
}

export default Article
