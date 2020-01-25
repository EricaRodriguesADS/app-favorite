import React from 'react'
import { Redirect } from 'wouter'

import LayoutMain from './Pure'
import Menu from '../Menu'
import { routes } from '../../store'
import useAuth from '../../services/hooks/useAuth'

interface IControlledLayout {
  title: string
  requireAuth?: boolean
  requireUnauth?: boolean
}

const ControlledLayout: React.FC<IControlledLayout> = ({
  children,
  title,
  requireAuth,
  requireUnauth,
}) => {
  const [auth] = useAuth()

  if (requireAuth && !auth.isLoggedIn) {
    return <Redirect to={routes.auth} />
  }

  if (requireUnauth && !!auth.isLoggedIn) {
    return <Redirect to={routes.home} />
  }

  return (
    <LayoutMain menu={<Menu/>} title={title}>
      {children}
    </LayoutMain>
  )
}

export default ControlledLayout
