import React, { useState } from 'react'
import ArticleList from './ArticleList'
import Form from './Form'
// import LoadAnim from './LoadAnim'
import Signin from './Signin'
import Submitted from './Submitted'
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing'

// import { AuthProvider } from '../context/AuthContext'
// import LoadAnim from './LoadAnim'

function App () {
  const [loginState, setLoginState] = useState()
  return (
    <>
      {/* <AuthProvider> */}
      <Switch>
        <Route exact path='/submit' render={() => {
          return <Form/>
        }}/>
        <Route exact path= '/'render={() => {
          return <Signin loginState={loginState}/>
        }}/>
        <Route exact path= '/landing' render={() => {
          return <Landing/>
        }}/>
        <Route exact path='/53e61336bb49ec978968786b07dea50b' render={() => {
          return <ArticleList setLoginState={setLoginState}/>
        }} />
        <Route exact path='/submitted' component={Submitted}/>

      </Switch>
      {/* </AuthProvider> */}

    </>

  )
}

export default App
