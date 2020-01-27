import React, { createContext, useState, useContext, useCallback } from 'react'
import { fbAuth } from '../firebase'

export interface IAuthState {
  isLoggedIn: boolean;
  name: string | null | undefined;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  name: '',
}

const useAuth = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  const updateState = useCallback((value) => {
    setIsLoggedIn(value)
  }, [status]
  )

  return [{ isLoggedIn, updateState }]

}


export const logOut = () => {
  fbAuth.signOut();
}


export default useAuth


