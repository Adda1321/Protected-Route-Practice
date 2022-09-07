import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export const RequireAuth = ( ) => {
  const location = useLocation()
  const auth = useAuth()
  return(
  auth.user ? <Outlet/> :    <Navigate to='/login' state={{ path: location.pathname }} />
  ) 
}