import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../db/Firebase'
import   Card from '../Card/Card'
import './List.css'
const List = ({onClickEdit}) => {
  const [posts, setPosts] = useState()
  
  const getDoc = async () => {
    const querySnapshot = await getDocs(collection(db, 'customerList'))
    const postData = []
    querySnapshot.forEach((doc) =>
      postData.push({ ...doc.data(), id: doc.id })
    )
    setPosts(postData)
  }   


  useEffect(() => {
    
    getDoc()
  }, [])

  const deleteItem = async(e)=>{
   const itemId= e.target.id
   await deleteDoc(doc(db, "customerList", `${itemId}`));
    getDoc() 
   }

  return <div className='list'>
    {posts?.map((el,index) =>{
      return(
        <div key={index} className="wrapper">
        <  Card
         onClickEdit={onClickEdit}
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
