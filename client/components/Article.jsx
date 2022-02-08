import React from 'react'

function Article ({ name, article, timestamp, profileImg, colorID }) {
  const imgSize = {
    width: '300px',
    height: '300px',
    display: 'inline-flex'
  }
  console.log(colorID % 2)
  return (
    <div className='article-div' style={{ backgroundColor: colorID % 2 === 0 ? 'black' : 'white' }}>
      <div>
        <img style={imgSize} src={profileImg} alt='profile-img'/>
        <h1 style={{ color: colorID % 2 === 0 ? 'white' : 'black' }}>{name}</h1>
        <p style={{ color: colorID % 2 === 0 ? 'white' : 'black' }}>{timestamp}</p>
        <p style={{ color: colorID % 2 === 0 ? 'white' : 'black' }}>{article}</p>
      </div>
    </div>
  )
}

export default Article
