import React from 'react'

function Article ({ name, article, time, profileImg, idx }) {
  const imgSize = {
    width: '300px',
    height: '300px',
    display: 'inline-flex'
  }
  const splitText = article.split(' ').slice(0, 14).join(' ')
  const splitTime = String(time).split(' ').slice(0, 5).join(' ')

  console.log('this is splitTime: ', String(time))
  console.log('this is split text: ', splitText)
  return (
    <div className='article-div'>
      <div>
        <img style={imgSize} src={profileImg} alt='profile-img'/>
        <h1>{name}</h1>
        <p>{splitTime}</p>
        <h2>{splitText}</h2><span><a href=''>...Read More</a></span>
      </div>
    </div>
  )
}

export default Article
