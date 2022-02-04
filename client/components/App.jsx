import React from 'react'
import ArticleList from './ArticleList'
import Form from './Form'
import SubmissionFeedback from './SubmissionFeedback'
import { Route } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'

import { getAuth } from 'firebase/auth'

function App () {
  // console.log('initial toggle val: ', toggle)
  const auth = getAuth()
  const [user] = useAuthState(auth)

  return (
    <>
      {user
        ? <Route exact path= '/' render= {({ history }) => {
          return <Form history= {history} />
        }} />
        : <Route exact path= '/' render= {({ history }) => {
          return <Signin history= {history} />
        }} />
      }
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
