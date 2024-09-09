import React from 'react'
import { logout } from '../auth/actions'

export const LogoutForm = () => {
  return (
    <div>
      <form action={logout}>
        <button className='navbar-brand text-white'>Logout</button>
      </form>
    </div>
  )
}
