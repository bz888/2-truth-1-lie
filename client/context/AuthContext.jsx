import React, { useContext, useState } from 'react'
import {
  getAuth, signInWithEmailAndPassword, signOut
} from 'firebase/auth'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

const AuthContext = React.createContext()

export function useAuth () {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const auth = getAuth()
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
  // const [user, loading, error] = useAuthState(auth)

  async function signIn (email, password) {
    try {
      await signInWithEmailAndPassword(email, password)
    } catch (err) {
      console.error('Failed to login, inccorectcredentials', err)
      alert('Failed to login, inccorectcredentials')
    }
  }

  function signOutFunc () {
    signOut(auth)
  }

  const value = {
    user,
    error,
    loading,
    signIn,
    signOutFunc
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
