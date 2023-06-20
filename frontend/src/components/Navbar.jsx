import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import "../index.css"

const Navbar = () => {
  const {user} = useAuthContext()
  const {logout} = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
        <div className="container">
            <Link to = "/" >
                <h1>Workout Buddy</h1>
            </Link>
            <nav>

              {user && (
              <div className="logout-div">
                <h1>{user.email}</h1>
                <button onClick={handleClick}>Logout</button>
              </div>
              )}

              {!user && (
              <div className="nav-links">
                <Link to= "/login">
                  <h1>Login</h1>
                </Link>

                <Link to= "/signup">
                  <h1>Signup</h1>
                </Link>
              </div>
              )}

              </nav>
        </div>
    </header>
  )
}

export default Navbar