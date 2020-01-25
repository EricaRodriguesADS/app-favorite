import React from 'react'

import { Redirect } from 'wouter'

interface INotFoundProps {
  path: string
}

const NotFound: React.FC<INotFoundProps> = () => {
  return <Redirect to="/" />
}

export default NotFound
