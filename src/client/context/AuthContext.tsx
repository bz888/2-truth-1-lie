import React, { createContext, ReactNode, useContext } from 'react'
import { Auth, AuthError, getAuth, signOut, UserCredential } from 'firebase/auth'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
// import { FirebaseApp } from '@firebase/app'

interface ContextProps {
    auth: Auth;
    user: UserCredential | undefined;
    error: AuthError | undefined;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOutFunc: (auth: Auth) => string;
}

interface childProps {
  children: ReactNode
}
const AuthContext = createContext<ContextProps>({} as ContextProps)

export function useAuth () {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }: childProps) {
  const auth = getAuth()
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)

  async function signIn (email: string, password: string) {
    try {
      await signInWithEmailAndPassword(email, password)
    } catch (err) {
      console.error('Failed to login, inccorectcredentials', err)
      alert('Failed to login, inccorectcredentials')
    }
  }

  function signOutFunc (auth: Auth) {
    signOut(auth)
    return 'success'
  }

  const value = {
    auth,
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
