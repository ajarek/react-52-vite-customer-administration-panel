import React  from 'react'
import {auth, provider} from '../db/Firebase'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'
import HeaderAuth from '../components/HeaderAuth/HeaderAuth'
const cookies = new Cookies()
import './Auth.css'

const Auth = ({setIsAuth}) => {
  const signItWithGoogle= async ()=>{
    try{
  const result = await signInWithPopup(auth, provider)
  cookies.set('auth-token', result.user.refreshToken)
  setIsAuth(true)
  console.log(result)
    }catch(err){console.error(err)}
  }
  return (
    <div className='auth'>
      <HeaderAuth/>
      <p>Sign In With Google To Continue</p>
      <button onClick={signItWithGoogle}>Sign In With Google</button>

    </div>
  )
}

export default Auth