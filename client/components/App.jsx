import React from 'react'
import ArticleList from './ArticleList'
import Form from './Form'
import SubmissionFeedback from './SubmissionFeedback'
import { Route } from 'react-router-dom'

function App () {
  // console.log('initial toggle val: ', toggle)
  return (
    <>
      <Route exact path= '/' render= {({ history }) => {
        return <Form history= {history} />
      }} />
      <Route exact path='/confirm' render={() => {
        return <SubmissionFeedback/>
      }} />
      <Route exact path='/results' render={() => {
        return <ArticleList />
      }} />
    </>
  )
}

export default App
