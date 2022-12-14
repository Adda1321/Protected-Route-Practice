import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {
  const auth = useAuth()
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav style={{marginRight:'10px'}}>
      <NavLink to='/' style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to='/profile' style={navLinkStyles}>
        profile
      </NavLink>
      <NavLink to='/products' style={navLinkStyles}>
        Products
      </NavLink>
      <NavLink to='/about' style={navLinkStyles}>
        About
      </NavLink>
      {!auth.user && (
        <NavLink to='/login' style={navLinkStyles}>
          Login
        </NavLink>
      )}
    </nav>
  )
}