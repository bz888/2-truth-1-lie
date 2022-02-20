import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()

export function useAuth () {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const value = {
    currentUser
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
