import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../db/Firebase'
import   Card from '../Card/Card'
import './List.css'
const List = () => {
  const [posts, setPosts] = useState()
  const [lol, setLol]=useState(false)

  useEffect(() => {
    const getDoc = async () => {
      const querySnapshot = await getDocs(collection(db, 'customerList'))
      const postData = []
      querySnapshot.forEach((doc) =>
        postData.push({ ...doc.data(), id: doc.id })
      )
      setPosts(postData)
    }   
    getDoc()
  }, [])

  const deleteItem = async(e)=>{
   const itemId= e.target.id
   await deleteDoc(doc(db, "customerList", `${itemId}`));
  
    const getDoc = async () => {
      const querySnapshot = await getDocs(collection(db, 'customerList'))
      const postData = []
      querySnapshot.forEach((doc) =>
        postData.push({ ...doc.data(), id: doc.id })
      )
      setPosts(postData)
    }   
    getDoc()
  
   
   }

  
 
  return <div className='list'>
    {posts?.map((el,index) =>{
      return(
        <div key={index} className="wrapper">
        <  Card
         id={el.id}
         onClick={deleteItem}
         name={el.name}
         email={el.email}
         phone={'tel '+el.phone}
         profession={el.profession}
         picture={el.picture}
         address={el.address}
        />
        </div>
       
      )
    })
  }
  </div>
}

export default List
