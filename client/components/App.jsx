import React from 'react'
import ArticleList from './ArticleList'
import Form from './Form'
// import SubmissionFeedback from './SubmissionFeedback'
import { Route } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'

import { getAuth } from 'firebase/auth'
import LoadIndicator from './LoadIndicator'
import { AnimatePresence } from 'framer-motion'
// import { getImageOutput, getTextOutput } from '../api/api'

function App () {
  const auth = getAuth()
  const [user] = useAuthState(auth)

  // const [apiState, setApiState] = useState({ imgData: '', txtData: '' })

  // async function apiCallsFunc (imgText, txtText) {
  //   const imgResult = await getImageOutput(imgText)
  //   const txtResult = await getTextOutput(txtText)
  //   setApiState({ ...apiState, imgData: imgResult, txtData: txtResult })
  //   console.log('new input', apiState)
  // }

  return (
    <>
      <Route exact path= '/' render= {({ history }) => {
        return user
          ? <Form history={history}>
{/* 
            <AnimatePresence
              initial={true}
              exitBeforeEnter={true}>
              <LoadIndicator/>
            </AnimatePresence> */}

          </Form>
          : <Signin/>
      }} />
      {/* <Route exact path= '/' render= {({ history }) => {
        return <Signin history= {history}>
          <AnimatePresence
            initial={true}
            exitBeforeEnter={true}
          >
            <LoadIndicator/>
          </AnimatePresence>
        </Signin>
      }} />

      <Route exact path='/confirm' render={() => {
        return <SubmissionFeedback/>
      }} /> */}
      <Route exact path='/results' render={() => {
        return <ArticleList/>
      }} />
    </>
  )
}

export default App
