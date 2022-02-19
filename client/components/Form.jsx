import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
// import { useAuthState } from 'react-firebase-hooks/auth'
import { getImageOutput, getOutputBlogTextCortext, getTextOutput, postToFirebase } from '../api/api'
import LoadAnim from './LoadAnim'
import { AnimatePresence } from 'framer-motion'
import Button from './Button'
const { isBanned } = require('../src/helperFunc')

function Form () {
  const [checkInput, setCheckInput] = useState(false)
  const [bannedState, setBannedState] = useState(false)

  const auth = getAuth()
  // const [user] = useAuthState(auth)
  const [input, setInput] = useState({
    name: '',
    truth1: '',
    truth2: '',
    lie: '',
    article: '',
    profileImg: ''
  })
  const [loadingState, setLoadingState] = useState(false)

  // let bannedWordsPresent = Object.keys(input).map((key) => (isBanned(input[key])))
  // bannedWordsPresent = bannedWordsPresent.some(element => element === true)
  // const checkVal = bannedWordsPresent.find(ele => ele === 'lmao')

  useEffect(() => {
    // const bannedWordsPresent = Object.keys(input).map((key) => (isBanned(input[key])))
    // console.log(foundBannedWord)
    const bannedWordsPresent = Object.keys(input).map(key => (isBanned(input[key])))
    const foundBannedWord = bannedWordsPresent.find(ele => ele === true)
    // console.log(stringCatch)

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

  async function apiCallsFunc (imgText, txtText) {
    try {
      setLoadingState(true)
      // const imgResult = await getImageOutput(imgText)
      // const txtResult = await getTextOutput(txtText)
      const test = 'https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/16:9/w_2992,h_1683,c_limit/dog-unsolicited.jpg'
      const testResult = await getOutputBlogTextCortext(txtText)
      const newInputObj = { ...input, article: testResult, profileImg: test }
      console.log('new input', newInputObj)
      postToFirebase({ ...input, article: testResult, profileImg: test }, auth)
    } catch (error) {
      console.error('Error in apiCallsFunc', error)
    } finally {
      setLoadingState(false)
    }
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
    apiCallsFunc(input.name, inputArr[genNum])
  }

  return (
    <>
      <div className='form-title'>
        <h1>2 Truths 1 Lie</h1>
      </div>
      <div className='form-div'>
        <form id='form'>
          <label htmlFor='form' className='form-label'>
            <span className='disclaimer'>
          Disclaimer: Article generator may contain explicit language and controversial material.
              <br></br>
          Play at your own risk
            </span>
          </label>

          {
            loadingState
              ? <AnimatePresence>
                <LoadAnim/>
              </AnimatePresence>
              : <>
                <input value={input.name} name='name' onChange={handleChange} placeholder='name' />
                <input value={input.truth1} name='truth1' onChange={handleChange} placeholder='first truth' />
                <input value={input.truth2} name='truth2' onChange={handleChange} placeholder='second truth' />
                <input value={input.lie} name='lie' onChange={handleChange} placeholder='lie'/>
                {/* add conditonal
                   render submit only if !== bannedstate && checkinput
                    if checkinput true && bannedstate is true render red button
                */}
                {/* {checkInput && <button className='button-31' onClick={handleClick}>submit</button>} */}
                <Button checkInput={checkInput} handleClick={handleClick} bannedState={bannedState} input={input}/>
              </>
          }

        </form>

      </div>
    </>
  )
}

export default Form
