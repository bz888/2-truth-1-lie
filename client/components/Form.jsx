import React, { useEffect, useState } from 'react'
import { getImageOutput, getOutputBlogTextCortext, postToFirebase } from '../api/api'
import LoadAnim from './LoadAnim'
import { AnimatePresence } from 'framer-motion'
import Button from './Button'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
const { isBanned, concatArticle } = require('../src/helperFunc')

function Form () {
  const [checkInput, setCheckInput] = useState(false)
  const [bannedState, setBannedState] = useState(false)
  const { auth, user } = useAuth()
  const [input, setInput] = useState({
    name: '',
    truth1: '',
    truth2: '',
    lie: '',
    article: '',
    profileImg: ''
  })
  const [loadingState, setLoadingState] = useState(false)
  const history = useHistory()
  useEffect(() => {
    if (user === undefined) {
      history.push('/login')
    }
  }, [user])

  useEffect(() => {
    const bannedWordsPresent = Object.keys(input).map(key => (isBanned(input[key])))
    const foundBannedWord = bannedWordsPresent.find(ele => ele === true)

    if (foundBannedWord === true) {
      setBannedState(() => (true))
      setCheckInput(() => (false))
    } else if (foundBannedWord === undefined) {
      setBannedState(() => (false))
    }

    if (input.name === '' || input.truth1 === '' || input.truth2 === '' || input.lie === '') {
      return setCheckInput(() => (false))
    } else {
      setCheckInput(() => (true))
    }
  }, [input])

  function handleChange (e) {
    e.preventDefault()
    const value = e.target.value
    const name = e.target.name
    setInput({
      ...input,
      [name]: value
    })
  }

  async function apiCallsFunc (name, selectedText) {
    try {
      setLoadingState(true)
      const imgResult = await getImageOutput(selectedText)
      const textCortexOutput = await getOutputBlogTextCortext(name + ' ' + selectedText)
      const inputCheck = await concatArticle(selectedText, name)
      const newInputObj = { ...input, article: inputCheck + ' ' + textCortexOutput, profileImg: imgResult }
      // console.log('new input', newInputObj)
      postToFirebase(newInputObj, auth, history)
    } catch (error) {
      console.error('Error in apiCallsFunc', error)
    } finally {
      setLoadingState(false)
    }
  }

  function semiRandomGenerator (min, max) {
    const num = Math.random() * (max - min) + min
    if (num <= 0.4) {
      return 0
    } else if (num <= 0.6) {
      return 1
    } else {
      return 2
    }
  }

  function handleClick (e) {
    e.preventDefault()
    const inputArr = [input.truth1, input.truth2, input.lie]
    const genNum = semiRandomGenerator(0, 2)
    apiCallsFunc(input.name, inputArr[genNum])
    // console.log(user)
  }

  return (
    <>
      <div className='form-title'>
        <h1>2 TRUTHS 1 LIE</h1>
      </div>
      <div className='form-div'>
        <form id='form'>
          {
            loadingState
              ? <AnimatePresence>
                <LoadAnim/>
              </AnimatePresence>
              : <>
                <label htmlFor='form' className='form-label'>
                  <div className='disclaimer'>
                    Article generator may contain explicit language and controversial material.
                  </div>
                </label>
                <input value={input.name} name='name' onChange={handleChange} placeholder='name' />
                <input value={input.truth1} name='truth1' onChange={handleChange} placeholder='first truth' />
                <input value={input.truth2} name='truth2' onChange={handleChange} placeholder='second truth' />
                <input value={input.lie} name='lie' onChange={handleChange} placeholder='lie'/>
                <Button checkInput={checkInput} handleClick={handleClick} bannedState={bannedState} input={input}/>
              </>
          }

        </form>

      </div>
    </>
  )
}

export default Form
