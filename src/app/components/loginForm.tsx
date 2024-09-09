"use client"
import React from 'react'
import { login } from '../auth/actions'
import { useFormState } from 'react-dom'

export const LoginForm = () => 
{
  const [state, formAction] = useFormState<any,FormData>(login,undefined);
  return (
    <div className='drop-shadow mx-auto' >
        <form action={formAction} className='flex flex-col border-2 border-gray-500 p-10 rounded-lg shadow-lg m-10 space-y-5'>
            <input className='border-b-2 w-full h-12 p-2' type="text" name="username" placeholder="Username" required/>
            <input className='border-b-2 w-full h-12 p-2' type="password" name="password" placeholder="Password" required/>
            <button className='navbar-brand' >Login</button>
            {state?.error && <p>{state.error}</p>}
        </form>
    </div>
  )
}
