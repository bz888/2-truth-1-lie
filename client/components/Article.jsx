import React from 'react'

function Article ({ name, article, timestamp, profileImg }) {
  const imgSize = {
    width: '100px',
    height: '100px',
    display: 'inline-block'
  }
  console.log(profileImg)
  return (
    <div>
      <h1>{name}</h1>
      <img style={imgSize} src={profileImg} alt='profile-img'/>
      <p>{timestamp}</p>
      <p>{article}</p>
    </div>
  )
}

export default Article
