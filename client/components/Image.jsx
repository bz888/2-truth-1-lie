import React from 'react'

function Image ({ idx, profileImg }) {
  return (
    <div className= {`image${idx}`}>
      <img src={profileImg} id='image' alt='profile-img'/>
    </div>
  )
}

export default Image
