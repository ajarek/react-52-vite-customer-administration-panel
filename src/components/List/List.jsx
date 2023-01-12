import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../db/Firebase'
const List = () => {
  const [posts, setPosts] = useState()

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

  
  return <div>
    {posts?.map((el,index) =>{
      return(
        <div key={index} className="wrapper">
        <p>{el.name}</p>
        <p>{el.email}</p>
        <p>{el.phone}</p>
        </div>
      )
    })
  }
  </div>
}

export default List
