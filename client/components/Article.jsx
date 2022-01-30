import React from 'react'

function Article ({ name, article, time }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{time}</p>
      <p>{article}</p>
    </div>
  )
}

export default Article
