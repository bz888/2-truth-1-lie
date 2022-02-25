import React from 'react'
import { splitText, splitTime } from '../src/helperFunc'

function SubArticle ({ name, article, time, idx }) {
  const splitArticle = splitText(article, 35)
  const splitTimestamp = splitTime(time)
  return (
    <div className= {`subArticle${idx}`}>
      {/* <h1>{name}</h1> */}
      <p id='timestamp'>{splitTimestamp}</p>
      <p id='subArticle'>{splitArticle}</p><span>... Read More</span>

    </div>
  )
}

export default SubArticle
