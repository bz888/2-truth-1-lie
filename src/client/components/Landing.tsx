import React from 'react'
import { useNavigate } from 'react-router-dom'
function Landing () {
  const navigate = useNavigate()

  function handleClick () {
    return navigate('submit')
  }
  return (
    <>
      <div className='form-title'>
        <h1>2 TRUTHS 1 LIE</h1>
      </div>
      <div className='landing-div'>
        <h2>Welcome</h2>
        <p>On the following page you&apos;ll be prompted to enter your name, two truths and a lie about yourself.</p>
        <p>
          Once submitted, AIDA will generate an article and image based on your answers.
        </p>
        <p>Have fun!</p>
        <br/>
        <br/>
        <button className='button-31' onClick={handleClick}>Continue</button>
      </div>
    </>
  )
}

export default Landing
