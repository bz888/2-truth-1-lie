import React from 'react'

function Article ({ name, article, timestamp }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{timestamp}</p>
      <p>{article}</p>
    </div>
  )
}

export default Article
