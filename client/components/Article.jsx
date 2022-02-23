import React from 'react'
import { splitText, splitTime } from '../src/helperFunc'

function Article ({ name, article, time, profileImg }) {
  const imgSize = {
    width: '65vh',
    height: '48vh',
    display: 'inline-flex'
  }
  const splitArticle = splitText(article, 60)
  const splitTimestamp = splitTime(time)

  return (
    <div className='article-div'>
      <div>
        <img style={imgSize} src={profileImg} alt='profile-img'/>
        <h1 id='name'>{name}</h1>
        <p id='timestamp'>{splitTimestamp}</p>
        <h2 id= 'subHeader'>{splitArticle}</h2><span>...Read More</span>
      </div>
    </div>
  )
}

export default Article
