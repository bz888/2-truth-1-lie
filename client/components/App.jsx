import React from 'react'
import ArticleList from './ArticleList'
import Form from './Form'
import { Route } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'

import LoadAnim from './LoadAnim'
import { getAuth } from 'firebase/auth'

function App () {
  const auth = getAuth()
  const [user, userLoading, userError] = useAuthState(auth)

  return (
    <>
      {userLoading && <LoadAnim/>}
      <Route exact path= '/' render= {() => {
        return user
          ? <Form/>
          : <Signin/>
      }} />
      <Route exact path='/results' render={() => {
        return <ArticleList user={user} userError={userError}/>
      }} />
    </>
  )
}

export default App
