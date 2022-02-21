import React from 'react'

function SubArticle ({ name, article, time, profileImg, idx }) {
  const imgSize = {
    width: '300px',
    height: '300px',
    display: 'inline-flex'
  }
  const splitText = article.split(' ').slice(0, 14).join(' ')
  const splitTime = String(time).split(' ').slice(0, 5).join(' ')
  return (
    <div className= {`subArticle${idx}`}>
      {/* <img style={imgSize} src={profileImg} alt='profile-img'/> */}
      {/* <h1>{name}</h1> */}
      <p id='timestamp'>{splitTime}</p>
      <p id='subHeader'>{splitText}</p>

    </div>
  )
}

export default SubArticle
