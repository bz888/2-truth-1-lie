import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { generateImage, generateText, postDataDB } from '../actions/text'
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

function Form ({ history, children }) {
  const dispatch = useDispatch()

  const reduxState = useSelector(state => state)

  const auth = getAuth()
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (!user) {
      console.log('user not found')
      return history.push('/login')
    }
  }, [user])

  useEffect(() => {
    // expect to log out
    if (reduxState.dbPost === 'success!') {
      signOut(auth)
      console.log('logging out')
      // history.push('/login')
    }
    console.log('logout useEffect toggled', reduxState.dbPost)
  }, [reduxState.dbPost])

  useEffect(() => {
    if (reduxState.apiOutput !== '' && reduxState.imgOutput !== '') {
      dbPost()
    }
  }, [reduxState.apiOutput, reduxState.imgOutput])

  const [input, setInput] = useState({
    name: '',
    truth1: '',
    truth2: '',
    lie: '',
    article: '',
    profileImg: '',
    colorID: 0
  })

  function dbPost () {
    const dataObj = { ...input, profileImg: reduxState.imgOutput, article: reduxState.apiOutput, colorID: input.colorID++ }
    console.log('sending dataObj: ', dataObj)
    if (reduxState.apiOutput === '' || reduxState.imgOutput === '') {
      console.log('dbpost dispatch: null hit')
      return null
    } else {
      dispatch(postDataDB(dataObj))
      // console.log('postStatus', postStatus)
      console.log(reduxState)
      console.log('db post dispatch hit')
    }
  }

  function handleChange (e) {
    e.preventDefault()
    const value = e.target.value
    const name = e.target.name
    setInput({
      ...input,
      [name]: value
    })
  }

  function semiRandomGenerator (min, max) {
    const num = Math.random() * (max - min) + min
    if (num <= 0.3333333) {
      return 0
    } else if (num <= 0.6666666) {
      return 1
    } else {
      return 2
    }
  }

  function handleClick (e) {
    e.preventDefault()
    const inputArr = [input.truth1, input.truth2, input.lie]
    const genNum = semiRandomGenerator(0, 2)

    console.log('selected input: ', inputArr[genNum])

    // dispatch(postAction(input))
    dispatch(generateText(inputArr[genNum]))
    dispatch(generateImage(input.name))
  }

  return (
    <>
      <div className='form-title'>
        <h1>2 Truths 1 Lie</h1>
      </div>
      <div className='form-div'>
        {children}
        <form id='form'>
          <label htmlFor='form' className='form-label'>
            <span className='disclaimer'>
          Disclaimer: Article generator may contain explicit language and controversial material.
              <br></br>
          Play at your own risk
            </span>
          </label>
          <input value={input.name} name='name' onChange={handleChange} placeholder='name'/>
          <input value={input.truth1} name='truth1' onChange={handleChange} placeholder='first truth' />
          <input value={input.truth2} name='truth2' onChange={handleChange} placeholder='second truth' />
          <input value={input.lie} name='lie' onChange={handleChange} placeholder='lie'/>
          <button className='button-31' onClick={handleClick}>submit</button>
        </form>

      </div>
    </>
  )
}

export default Form
