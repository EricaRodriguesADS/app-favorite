import React, { useState, useEffect } from 'react'
import { Redirect } from 'wouter'
import { fbAuth } from '../../services/firebase'
import LayoutMain from './Pure'
import Menu from '../Menu'
import { routes } from '../../store'

interface IControlledLayout {
  title: string
  requireAuth?: boolean
  requireUnauth?: boolean
}

/**
 * @param children
 * @param title
 * @param requireAuth 
 * @param requireAuth
 * */
const ControlledLayout: React.FC<IControlledLayout> = ({
  children,
  title,
  requireAuth,
}) => {
  const[ starting, setStarting] = useState(true);
 
  if (requireAuth && !fbAuth.currentUser) {
    return <Redirect to={routes.auth} />
  }

  useEffect(()=>{
    setTimeout(()=>{
      setStarting(false)
    }, 500)
    
    return() => setStarting(true)
  },[])

  if(starting) return(<div>Carregando...</div>)

  return (
    <LayoutMain menu={<Menu/>} title={title}>
      {children}
    </LayoutMain>
  )
}

export default ControlledLayout
