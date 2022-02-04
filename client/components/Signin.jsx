import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'

export default function Signin ({ history, children }) {
  const auth = getAuth()

  const [user] = useAuthState(auth)

  const [signInVal, setSignInVal] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user])

  async function logInwithEmailAndPassword (email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err)
      alert('incorrect user or password')
    }
  }

  function handleClick () {
    // e.prevenDefault()
    logInwithEmailAndPassword(signInVal.email, signInVal.password)
    history.push('/')
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
    <div>
      <h1>Sign In</h1>
      {children}
      <input value={signInVal.email} name='email' onChange={handleChange} placeholder='email'/>
      <input value={signInVal.password} name='password' onChange={handleChange} placeholder='password' type='password'/>
      <button onClick={handleClick}>log in</button>
    </div>
  )
}
