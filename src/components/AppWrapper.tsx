import React from 'react'
import { Router, Switch } from "wouter";
import { ThemeProvider } from 'styled-components'

interface IAppPreloaderProps {
  children: JSX.Element[]
}

const theme = { background: '#1890ff' }

/**
 * Este componente simples serve para embrulhar o app.
 */
const AppPreloader: React.FC<IAppPreloaderProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>     
          <Router>
            <Switch>{children}</Switch>
          </Router>
      </ThemeProvider>
    </>
  )
}

export default AppPreloader
