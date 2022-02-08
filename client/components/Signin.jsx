import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'
import LoadAnim from './LoadAnim'

export default function Signin () {
  const auth = getAuth()

  const [user, loading] = useAuthState(auth)
  // const [validState, setValidState] = useState({ accent-color: 'rgba(255,43,0,0.5)' })
  const [check, setCheck] = useState(false)

  const [signInVal, setSignInVal] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    // if (user !== null) {
    //   // history.push('/')
    //   setCheck(true)
    // }
    // user == null ? setCheck(false) : setCheck(true)
    console.log('check state: ', check)
  }, [user])

  async function logInwithEmailAndPassword (email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setCheck(true)
    } catch (err) {
      console.error(err)
      alert('incorrect user or password')
      setCheck(false)
    }
  }

  function handleClick (e) {
    // e.prevenDefault()
    logInwithEmailAndPassword(signInVal.email, signInVal.password)
    // history.push('/submissionpage')
  }

  function handleChange (e) {
    const value = e.target.value
    const name = e.target.name
    setSignInVal({
      ...signInVal,
      [name]: value
    })
  }
  return (
    <div className='signIn-body'>

      <div className='signIn-div'>
        {/* <h1>Sign In</h1> */}
        {loading && <LoadAnim/>}

        <div className="padlock">
          <div className="padlock__hook">
            <div className="padlock__hook-body"></div>
            <div className="padlock__hook-body"></div>
          </div>
          <div className="padlock__body">
            <div className="padlock__face">
              <div className="padlock__eye padlock__eye--left"></div>
              <div className="padlock__eye padlock__eye--right"></div>
              <div className="padlock__mouth padlock__mouth--one"></div>
              <div className="padlock__mouth padlock__mouth--two"></div>
              <div className="padlock__mouth padlock__mouth--three"></div>
            </div>
          </div>
        </div>
        {
          check
            ? <div className='loggedIn-msg'>
              <h1>You logged in!</h1>
              <button className="enter-form-button" type="reset" onClick={handleClick}>Enter Site</button>
            </div>
            : <form className='signIn-form'>
              <label htmlFor='email'>Email</label>

              <input
                id='inputEmail'
                value={signInVal.email}
                name='email'
                onChange={handleChange}
                placeholder='Enter your Email'
                type='email'
                required="required"/>

              <label htmlFor='password'>Password</label>
              <input
                title='did you forget your password?'
                id='inputPass'
                pattern='password123'
                value={signInVal.password}
                name='password'
                onChange={handleChange}
                placeholder='Enter your password'
                type='password'
                required="required"
              />
              <input id="login" type="checkbox" onClick={handleClick}/>
              <label className='login-button' htmlFor='login'>
                <span>Enter</span>
                <svg>
                  <path d="M10,17V14H3V10H10V7L15,12L10,17M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16H7V20H17V4H7V8H5V4A2,2 0 0,1 7,2Z"></path>
                </svg>
              </label>
              {/* <button onClick={handleClick}>log in</button> */}
              {/* <label className='checkState' htmlFor='checkState'/> */}
            </form>

        }
        <button id='checkState' type='checkbox' checked={true}/>

      </div>
    </div>
  )
}