import React from 'react'

function Article ({ name, article, time, profileImg }) {
  const imgSize = {
    width: '65vh',
    height: '48vh',
    display: 'inline-flex'
  }
  const splitText = article.split(' ').slice(0, 14).join(' ')
  const splitTime = String(time).split(' ').slice(0, 5).join(' ')
  return (
    <div className='article-div'>
      <div>
        <img style={imgSize} src={profileImg} alt='profile-img'/>
        <h1 id='name'>{name}</h1>
        <p id='timestamp'>{splitTime}</p>
        <h2 id= 'subHeader'>{splitText}</h2><span>...Read More</span>
      </div>
    </div>
  )
}

export default Article
