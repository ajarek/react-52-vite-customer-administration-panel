import React from 'react'
import {auth, provider} from '../db/Firebase'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Auth = () => {
  const signItWithGoogle= async ()=>{
  const result = await signInWithPopup(auth, provider)
  cookies.set('auth-token', result.user.refreshToken)
  console.log(result)
  }
  return (
    <div className='auth'>
      <p>Sign In With Google To Continue</p>
      <button onClick={signItWithGoogle}>Sign In With Google</button>

    </div>
  )
}

export default Auth