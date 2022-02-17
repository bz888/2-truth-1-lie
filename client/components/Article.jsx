import React from 'react'

function Article ({ name, article, time, profileImg, colorProfile }) {
  const imgSize = {
    width: '300px',
    height: '300px',
    display: 'inline-flex'
  }
  console.log(colorProfile % 2)
  return (
    <div className='article-div'>
      <div>
        <img style={imgSize} src={profileImg} alt='profile-img'/>
        <h1>{name}</h1>
        <p>{`${time}`}</p>
        <p>{article}</p>
      </div>
    </div>
  )
}

export default Article
