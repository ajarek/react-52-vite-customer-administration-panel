import Auth from './auth/Auth'
import Cookies from 'universal-cookie'
import { useState } from 'react'
import Panel from './components/Panel/Panel'
const cookies = new Cookies()
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))

  return (
    <div className='App'>
      {isAuth ? <Panel /> : <Auth setIsAuth={setIsAuth} />}
    </div>
  )
}

export default App
