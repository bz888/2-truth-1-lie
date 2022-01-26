import React, { useState } from 'react'
import { getTextOutput } from '../api'

function Form () {
  const [form, setForm] = useState('')
  const [generatedText, setGeneratedText] = useState('')

  function handleChange (e) {
    console.log(e.target.value)
    setForm(e.target.value)
  }

  function handleClick () {
    // find a better way to concat this

    getTextOutput(form)
      .then(output => {
        setGeneratedText(output)
        return null
      })
      .catch(err => { console.error(err) })
  }
  return (
    <>
      <h1>Words of wisdom for you</h1>
      <input value={form} name='verb' onChange={handleChange} placeholder='test'/>
      <button onClick={handleClick}>submit</button>
      <p>{generatedText}</p>
    </>

  )
}

export default Form
