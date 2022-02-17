import React from 'react'

function SubArticle ({ name, article, time, profileImg, colorProfile }) {
  const imgSize = {
    width: '300px',
    height: '300px',
    display: 'inline-flex'
  }
  console.log('this is colorProfile', 'subArticle' + colorProfile)
  return (
    <div className= {`subArticle${colorProfile}`}>

      {/* <img style={imgSize} src={profileImg} alt='profile-img'/> */}
      {/* <h1>{name}</h1> */}
      <p>{`${time}`}</p>
      {/* <p>{article}</p> */}

    </div>
  )
}

export default SubArticle
