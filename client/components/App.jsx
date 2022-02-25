import React from 'react'
import ArticleList from './ArticleList'
import Form from './Form'
// import LoadAnim from './LoadAnim'
import Signin from './Signin'
import Submitted from './Submitted'
import { Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
// import LoadAnim from './LoadAnim'

function App () {
  return (
    <>
      <AuthProvider>
        <Switch>
          <Route exact path='/' render={() => {
            return <Form/>
          }}/>
          <Route path= '/login' component={Signin}/>
          <Route exact path='/53e61336bb49ec978968786b07dea50b' render={() => {
            return <ArticleList/>
          }} />
          <Route exact path='/submitted' component={Submitted}/>
          {/* <Route exact path='/testload' component={LoadAnim}/> */}

        </Switch>
      </AuthProvider>

    </>

  )
}

export default App
