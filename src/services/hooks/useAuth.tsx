import React, { createContext, useState, useContext, useEffect } from 'react'
import { fbAuth } from '../firebase'
import Preloader from '../../components/Preloader'

export interface IAuthState {
  initialized: boolean;
  isLoggedIn: boolean;
  user?: firebase.UserInfo;
}

const initialState: IAuthState = {
  initialized: false,
  isLoggedIn: false,
  user: undefined,
}

const StateContext = createContext<IAuthState>(initialState)
type SetAuthState = React.Dispatch<React.SetStateAction<IAuthState>>


const AuthContainer = async (setState: SetAuthState) => {
  console.log("oi")
 await fbAuth.onAuthStateChanged(auth => {
   console.log("entrou")
    setState(oldState => ({ ...oldState, isLoaded: true }));
    if(auth) {
      console.log('Usuário logou.');
      const userJson = auth.toJSON() as firebase.UserInfo;

      // Adicionar state com os dados do usuário
      setState(oldState => ({ ...oldState, user: userJson, isLoggedIn: true }));
    } else {
      console.log('Usuário deslogou.');

      // Remove informações do usuário
      setState(oldState => ({ ...oldState,
        isLoggedIn: false,
        user: undefined,
      }));
    }
   
  });
};

export const Provider: React.FC = ({ children }) => {
  const [authState, setAuth] = useState(initialState);

  useEffect(() => {
    AuthContainer(setAuth);
  }, [])

  if (!authState.initialized) {
    return <Preloader text="Loading authentication" />;
  }

  return (
    <StateContext.Provider value={authState}>{children}</StateContext.Provider>
  )
}

export const logOut = () => {
  fbAuth.signOut();
}

export default () => {
  const state = useContext(StateContext);
  return [state];
}
