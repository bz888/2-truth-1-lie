import React from 'react'
import { splitText, splitTime } from '../src/helperFunc'

function SubArticle ({ name, article, time, idx }) {
  const splitArticle = splitText(article, 40)
  const splitTimestamp = splitTime(time)
  return (
    <div className= {`subArticle${idx}`}>
      {/* <h1>{name}</h1> */}
      <p id='timestamp'>{splitTimestamp}</p>
      <p id='subHeader'>{splitArticle}</p>

    </div>
  )
}

export default SubArticle
