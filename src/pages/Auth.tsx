import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import firebase, { fbAuth } from '../services/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { routes } from '../store'
import LayoutMain from '../components/LayoutMain'

const FullScreenGrid = styled.div`
  width: 100%;
  height: 100%;
`

const uiConfig = {
  callbacks: {
    // Evita redirecionamentos depois de logar.
    signInSuccessWithAuthResult: () => {
      window.location.href = routes.home
      return false
    },
  },
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
}

interface IAuthProps {
  path?: string
}

const Auth: React.FC<IAuthProps> = () => {
  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  const [text, setText] = useState("Login");

  useEffect(() => {
    fbAuth.onAuthStateChanged((user)=>{
      setIsLoggedIn(!!user)
    })

    if(isLoggedIn) setText('Perfil')
    else setText('Login')
  },[isLoggedIn])

  return (
    <LayoutMain title={text}>
      <FullScreenGrid >
      {isLoggedIn ?<span>
            <h1>Olá {fbAuth.currentUser?.displayName}</h1>
            <button onClick={() =>fbAuth.signOut()}>Não é você? Sair</button>
          </span> :
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fbAuth} />}
      </FullScreenGrid>
    </LayoutMain>
  )
}

export default Auth
