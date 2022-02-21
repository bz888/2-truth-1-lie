import React from 'react'

function SubArticle ({ name, article, time, idx }) {
  const splitText = article.split(' ').slice(0, 14).join(' ')
  const splitTime = String(time).split(' ').slice(0, 5).join(' ')
  return (
    <div className= {`subArticle${idx}`}>
      {/* <h1>{name}</h1> */}
      <p id='timestamp'>{splitTime}</p>
      <p id='subHeader'>{splitText}</p>

    </div>
  )
}

export default SubArticle
