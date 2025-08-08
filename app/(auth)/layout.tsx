import { ReactNode } from 'react'

const AuthLayout = ({children}: {children: ReactNode} ) => {
  return (
    <div className='antialiased pattern auth-layout'>{children}</div>
  )
}

export default AuthLayout;