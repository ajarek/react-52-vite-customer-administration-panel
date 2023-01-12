import React,{useState} from 'react '
import Form from '../../components/Form/Form'
import List from '../../components/List/List'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
import './Panel.css'

const Panel = () => {
  const [add, setAdd] =useState(false)
  return (
    <div className='panel'>
      <h1>Customer administrative panel 🛠️</h1>
      <div className="button">
        <button onClick={()=>setAdd(!add)}>{add?'Back to List':'Add to List'}</button>
        <button className='logout' onClick={()=>{cookies.remove('auth-token',[]); location.reload()}}>Logout</button>
      </div>
      {add?<Form onSubmit={(data)=>console.log(data)}/>:<List/>}
      </div>
  )
}

export default Panel