import React, { useEffect, useState } from 'react'
// import ArticleList from './ArticleList'
import { useDispatch, useSelector } from 'react-redux'
import { generateImage, generateText, postDataDB } from '../actions/text'

function Form (props) {
  const dispatch = useDispatch()
  // const { history } = props
  const apiOutputText = useSelector(state => state.apiOutput)
  const apiOutputIMG = useSelector(state => state.imgOutput)

  const [input, setInput] = useState({
    name: '',
    truth1: '',
    truth2: '',
    lie: '',
    article: '',
    profileImg: ''
  })
  // useEffect(() => {

  //   // expect to write into db
  //   console.log('output received, writing to db')
  // }, [apiOutputText])

  function dbPost () {
    const dataObj = { ...input, article: apiOutputText, profileImg: apiOutputIMG }
    console.log('dataObj: ', dataObj)
    if (apiOutputText === '' || apiOutputIMG === '') {
      console.log('dbpost dispatch: null hit')
      return null
    } else {
      dispatch(postDataDB(dataObj))
      console.log('db post dispatch hit')
    }

    // simplified line
    // apiOutputText === '' ? null : dispatch(postDataDB(dataObj))
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

  function handleClick () {
    const inputArr = [input.truth1, input.truth2, input.lie]
    const genNum = semiRandomGenerator(0, 2)

    console.log('selected input: ', inputArr[genNum])

    dispatch(generateText(inputArr[genNum]))
    dispatch(generateImage(input.name))
  }

  function handleRender (e) {
    e.preventDefault()
    dbPost()
  }
  return (
    <div>
      <h1>Two Truths and One Lie</h1>

      <form>
        <input value={input.name} name='name' onChange={handleChange} placeholder='name'/>
        <input value={input.truth1} name='truth1' onChange={handleChange} placeholder='first truth'/>
        <input value={input.truth2} name='truth2' onChange={handleChange} placeholder='second truth'/>
        <input value={input.lie} name='lie' onChange={handleChange} placeholder='lie'/>
      </form>
      <button onClick={handleClick}>submit</button>
      <button onClick={handleRender}>render articles</button>
      {/* <p>{generatedText}</p> */}
      {/* <ArticleList toggle={toggle} /> */}

    </div>

  )
}

export default Form
