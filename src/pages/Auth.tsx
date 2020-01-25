import React from 'react'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import styled from 'styled-components'
import firebase, { fbAuth } from '../services/firebase'
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
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
}

interface IAuthProps {
  path?: string
}

const Auth: React.FC<IAuthProps> = () => {
  return (
    <LayoutMain title="Login" requireUnauth>
      <FullScreenGrid >
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fbAuth} />
      </FullScreenGrid>
    </LayoutMain>
  )
}

export default Auth
