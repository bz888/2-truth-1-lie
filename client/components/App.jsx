import React from 'react'
import ArticleList from './ArticleList'
import Form from './Form'
// import LoadAnim from './LoadAnim'
import Signin from './Signin'
import Submitted from './Submitted'
import { Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        {/* {userLoading && <LoadAnim/>} */}
        {/* {userError && <strong>Error: {JSON.stringify(userError)}</strong>} */}
        <Switch>
          <Route exact path='/' render={() => {
            return <Form/>
          }}/>
          <Route path= '/login' component={Signin}/>
          <Route exact path='/results' render={() => {
            return <ArticleList/>
          }} />
          <Route exact path='/submitted' component={Submitted}/>

        </Switch>
      </AuthProvider>

    </>

  )
}

export default App
