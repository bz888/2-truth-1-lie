import React from 'react'
import ArticleList from './ArticleList'
import Form from './Form'
import SubmissionFeedback from './SubmissionFeedback'
import { Route } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'

import { getAuth } from 'firebase/auth'
import LoadIndicator from './LoadIndicator'
import { AnimatePresence } from 'framer-motion'

function App () {
  // console.log('initial toggle val: ', toggle)
  const auth = getAuth()
  const [user] = useAuthState(auth)

  return (
    <>
      {user
        ? <Route exact path= '/' render= {({ history }) => {
          return <Form history= {history}>
            <AnimatePresence
              initial={true}
              exitBeforeEnter={true}
            >
              <LoadIndicator/>
            </AnimatePresence>
          </Form>
        }} />
        : <Route exact path= '/' render= {({ history }) => {
          return <Signin history= {history}>
            <AnimatePresence
              initial={true}
              exitBeforeEnter={true}
            >
              <LoadIndicator/>
            </AnimatePresence>
          </Signin>
        }} />
      }
      <Route exact path='/confirm' render={() => {
        return <SubmissionFeedback/>
      }} />
      <Route exact path='/results' render={() => {
        return <ArticleList>
          {/* <LoadIndicator/> */}
        </ArticleList>
      }} />
    </>
  )
}

export default App
