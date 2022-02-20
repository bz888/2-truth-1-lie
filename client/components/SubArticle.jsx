import React from 'react'

function SubArticle ({ name, article, time, profileImg, idx }) {
  const imgSize = {
    width: '300px',
    height: '300px',
    display: 'inline-flex'
  }
  return (
    <div className= {`subArticle${idx}`}>
      {/* <img style={imgSize} src={profileImg} alt='profile-img'/> */}
      {/* <h1>{name}</h1> */}
      <p>{`${time}`}</p>
      <p>{article}</p>

    </div>
  )
}

export default SubArticle
