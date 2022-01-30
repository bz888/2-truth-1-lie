import React, { useState } from 'react'
// import { getTextOutput, postDbForm } from '../api/api'
// import ArticleList from './ArticleList'
import { useDispatch, useSelector } from 'react-redux'
import { generateText } from '../actions/text'

function Form (props) {
  const { history } = props
  const apiOutputText = useSelector(state => state.apiOutput)
  const dispatch = useDispatch()

  const [input, setInput] = useState({
    name: '',
    truth1: '',
    truth2: '',
    lie: '',
    article: ''
  })

  // const [generatedText, setGeneratedText] = useState('')

  function handleChange (e) {
    // console.log(e.target.value)
    const value = e.target.value
    const name = e.target.name

    setInput({
      ...input,
      [name]: value
    })
  }

  function randomGenerator (min, max) {
    const num = Math.floor(Math.random() * (max - min) + min)
    return num
  }

  function handleClick () {
    console.log('input data: ', input)

    const inputArr = [input.truth1, input.truth2, input.lie]

    const genNum = randomGenerator(0, 2)

    console.log('selected input: ', inputArr[genNum])

    const apiDATA = dispatch(generateText(inputArr[genNum]))

    console.log('apiDATA: ', apiDATA)
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
      {/* <button onClick={handleRender}>render articles</button> */}
      {/* <p>{generatedText}</p> */}
      {/* <ArticleList toggle={toggle} /> */}

    </div>

  )
}

export default Form
