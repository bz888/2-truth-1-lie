import React from 'react'
import { splitText, splitTime } from '../firebase-init/helperFunc'

interface SubArticleType {
  article: string
  time: string
  idx: number
}

function SubArticle ({ article, time, idx } : SubArticleType) {
  const splitArticle = splitText(article, 45)
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
