import React from 'react'
import ReactFlipCard from 'reactjs-flip-card'

const Card = ({name, email,phone}) => {
  const styles = {
    card: {
      width: '340px',
      height:'189px',
      color: 'white',
      borderRadius: 10,
      cursor:'pointer',
      padding:'1rem',
      background: 'rgba(255, 255, 255, 0.1)',
      boxShadow:' 20px 20px 50px rgba(3, 3, 3, 0.5)',
      overflow: 'hidden',
      borderTop:' 1px solid rgba(255, 255, 255, 0.5)',
      borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
      backdropFilter: 'bluar(5px)'
    }  
  }
  return (
    <ReactFlipCard
    flipTrigger={'onClick'}
      frontStyle={styles.card}
      backStyle={styles.card}
      frontComponent={
      <div>
       <h1> {name}</h1>
      
        </div>
    }
      backComponent={<div>
        <p>📞 {phone}</p>
        <p>✉️ {email}</p>
        </div>}
      direction={"vertical"}
      containerStyle={{width:'340px',height:'189px'}}
    />
  )
}

export default Card
