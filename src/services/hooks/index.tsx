import React from 'react'

import { Provider as AuthProvider } from './useAuth'

const Providers: React.FC<{}> = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)

export default Providers