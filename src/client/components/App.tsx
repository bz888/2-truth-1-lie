import React, { useState } from 'react'
import ArticleList from './ArticleList'
import Form from './Form'
// import LoadAnim from './LoadAnim'
import Signin from './Signin'
import Submitted from './Submitted'
import { Route, Routes } from 'react-router-dom'
import Landing from './Landing'

// import { AuthProvider } from '../context/AuthContext'
// import LoadAnim from './LoadAnim'

function App () {
  const [loginState, setLoginState] = useState('')
  return (
    <>
      {/* <AuthProvider> */}
      <Routes>
        <Route path='/submit' element={<Form/>}/>
        <Route path= '/' element={<Signin loginState={loginState}/>}/>

        <Route path= '/landing' element={<Landing/>}/>
        <Route path='/53e61336bb49ec978968786b07dea50b' element={<ArticleList setLoginState={setLoginState}/>} />
        <Route path='/submitted' element={<Submitted/>}/>

      </Routes>
      {/* </AuthProvider> */}

    </>

  )
}

export default App
