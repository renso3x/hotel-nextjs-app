import React from 'react'
import { withAuthSync, logout } from '../utils/auth'

const Home = props => {
  return (
    <div>
      <h1>Welcome User!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default withAuthSync(Home)