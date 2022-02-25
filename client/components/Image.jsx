import React from 'react'
import placeHoldingImg from '../img/aida.png'

function Image ({ idx, profileImg }) {
  function errorHandle (e) {
    // console.log(e.target.src)
    e.currentTarget.src = placeHoldingImg
  }

  return (
    <div className= {`image${idx}`}>
      <img src={profileImg} id='image' alt='profile-img' onError={errorHandle}/>
    </div>
  )
}

export default Image
