import React, { useState } from 'react '
import { db } from '../../db/Firebase'
import { updateDoc, collection, addDoc, doc, getDoc } from 'firebase/firestore'
import Form from '../../components/Form/Form'
import List from '../../components/List/List'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
import './Panel.css'

const Panel = () => {
  const [add, setAdd] = useState(false)
  const [userId, setUserId] = useState(null)
  const [docId, setDocId] = useState(null)

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
    setUserId(null)
  }
  const onClickEdit = async (e) => {
    const itemId = e.target.id
    setDocId(itemId)
    const docRef = doc(db, 'customerList', `${itemId}`)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      setUserId((userId) => (userId = docSnap.data()))
    } else {
      console.log('No such document!')
    }
    
  }
  const handleCheckedChange = async (data) => {
    const taskDocRef = doc(db, 'customerList', docId)
    console.log(data)
    try {
      await updateDoc(taskDocRef, {
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
    setUserId(null)
  }

  return (
    <div className='panel'>
      <h1>Customer administrative panel 🛠️</h1>
     
      {userId ? (
        <>
        <div className='button'>
        <button onClick={() => location.reload()}>
           Back to List 
        </button>
        </div>
        <Form
          onSubmit={handleCheckedChange}
          label={'Update'}
          Name={userId?.name}
          Profession={userId?.profession}
          Email={userId?.email}
          Phone={userId?.phone}
          Address={userId?.address}
          Picture={userId?.picture}
        />
        </>
      ) : (add ? (
        <>
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
        <Form onSubmit={handleSubmit} />
        </>
      ) : (
        <>
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
        <List onClickEdit={onClickEdit} />
        </>
      ))
      }
    </div>
  )
}

export default Panel
