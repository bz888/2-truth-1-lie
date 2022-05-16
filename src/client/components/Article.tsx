import React from 'react'
import { splitText, splitTime } from '../firebase-init/helperFunc'
// import placeHoldingImg from '../img/aida-placeholder.jpg'

interface ArticleProps {
  name: string
  article: string
  time: string
  profileImg: string
}

function Article ({ name, article, time, profileImg }: ArticleProps) {
  const imgSize = {
    width: '65vh',
    height: '48vh',
    display: 'inline-flex'
  }
  const splitArticle = splitText(article, 85)
  const splitTimestamp = splitTime(time)

  // function errorHandle (e) {
  // console.log(e.target.src)
  // e.target.src = placeHoldingImg
  // }

  return (
    <div className='article-div'>
      <div>
        <img style={imgSize} src={profileImg} alt='profile-img'/>
        <h1 id='name'>{name}</h1>
        <p id='timestamp'>{splitTimestamp}</p>
        <p id= 'subHeader'>{splitArticle}</p><span>... Read More</span>
      </div>
    </div>
  )
}

export default Article
