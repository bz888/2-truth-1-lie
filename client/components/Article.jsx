import React from 'react'

function Article ({ name, article, timestamp, profileImg, colorProfile }) {
  const imgSize = {
    width: '300px',
    height: '300px',
    display: 'inline-flex'
  }
  console.log(colorProfile % 2)
  return (
    <div className='article-div' style={{ backgroundColor: colorProfile % 2 === 0 ? 'black' : 'white' }}>
      <div>
        <img style={imgSize} src={profileImg} alt='profile-img'/>
        <h1 style={{ color: colorProfile % 2 === 0 ? 'white' : 'black' }}>{name}</h1>
        <p style={{ color: colorProfile % 2 === 0 ? 'white' : 'black' }}>{timestamp}</p>
        <p style={{ color: colorProfile % 2 === 0 ? 'white' : 'black' }}>{article}</p>
      </div>
    </div>
  )
}

export default Article
