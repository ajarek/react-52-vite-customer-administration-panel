import React,{useState} from 'react '
import {db} from '../../db/Firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import Form from '../../components/Form/Form'
import List from '../../components/List/List'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
import './Panel.css'
//T5Gy3VEyvpsEM7Zc4GJy
const Panel = () => {
  const handleSubmit = async (data) => {
    console.log(data);
    try {
      await addDoc(collection(db, 'customerList'), {
        email:data.email,
        name: data.name,
        phone: data.phone    
      })
    } catch (err) {
      alert(err)
    }
  }
  const [add, setAdd] =useState(false)
  return (
    <div className='panel'>
      <h1>Customer administrative panel 🛠️</h1>
      <div className="button">
        <button onClick={()=>setAdd(!add)}>{add?'Back to List':'Add to List'}</button>
        <button className='logout' onClick={()=>{cookies.remove('auth-token',[]); location.reload()}}>Logout</button>
      </div>
      {add?<Form onSubmit={handleSubmit}/>:<List/>}
      </div>
  )
}

export default Panel