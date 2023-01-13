import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../db/Firebase'
import   Card from '../Card/Card'
import './List.css'
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

  
  return <div className='list'>
    {posts?.map((el,index) =>{
      return(
        <div key={index} className="wrapper">
        <  Card
         name={el.name}
         email={el.email}
         phone={'tel '+el.phone}
        />
        </div>
       
      )
    })
  }
  </div>
}

export default List
