import React, { useState } from 'react'
import ArticleList from './ArticleList'
import Form from './Form'
import SubmissionFeedback from './SubmissionFeedback'
import { Route } from 'react-router-dom'

function App () {
  const [toggle, setToggle] = useState(true)
  // console.log('initial toggle val: ', toggle)
  return (
    <>
      <h1>Hello world</h1>
      <Route exact path= '/' render= {({ history }) => {
        return <Form history= {history} toggle={toggle} setToggle={setToggle}/>
      }} />
      <Route exact path='/confirm' render={() => {
        return <SubmissionFeedback/>
      }} />
      <Route exact path='/results' render={() => {
        return <ArticleList toggle={toggle}/>
      }} />
    </>
  )
}

export default App
