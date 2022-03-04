import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
function Landing () {
  const history = useHistory()
  const { user } = useAuth()
  useEffect(() => {
    if (user === undefined) {
      history.push('/')
    }
  }, [user])
  function handleClick () {
    return history.push('/submit')
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
        <p>For the best results, start your prompts as though they are following on from your name.
          <br/>
          For example:
          <br/>
          <br/>
          Name: John
          <br/>
          <br/>
          Truth: owns three cats ... etc etc
        </p>
        <p>Have fun!</p>
        <button className='button-31' onClick={handleClick}>Continue</button>
      </div>
    </>
  )
}

export default Landing
