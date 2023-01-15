import React, { useState } from 'react '
import { db } from '../../db/Firebase'
import { collection, addDoc, doc, getDoc } from 'firebase/firestore'
import Form from '../../components/Form/Form'
import List from '../../components/List/List'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
import './Panel.css'
import { async } from '@firebase/util'

const Panel = () => {
  const [add, setAdd] = useState(false)
  const handleSubmit = async (data) => {
    try {
      await addDoc(collection(db, 'customerList'), {
        profession: data.profession,
        email: data.email,
        name: data.name,
        phone: data.phone,
        address: data.address,
        picture: data.picture,
      })
    } catch (err) {
      alert(err)
    }
    setAdd(false)
  }
 const onClickEdit=async(e)=>{
  
  const itemId= e.target.id
  const docRef = doc(db, "customerList", `${itemId}`);
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
setAdd(true)
 }
  return (
    <div className='panel'>
      <h1>Customer administrative panel 🛠️</h1>
      <div className='button'>
        <button onClick={() => setAdd(!add)}>
          {add ? 'Back to List' : 'Add to List'}
        </button>
        <button
          className='logout'
          onClick={() => {
            cookies.remove('auth-token', [])
            location.reload()
          }}
        >
          Logout
        </button>
      </div>
      {add ? <Form onSubmit={handleSubmit} /> : <List 
       onClickEdit={onClickEdit}/>}
    </div>
  )
}

export default Panel
