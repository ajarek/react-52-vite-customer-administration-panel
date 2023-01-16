import React from 'react'
import ReactFlipCard from 'reactjs-flip-card'
import './Card.css'
const Card = (props) => {

  const { name, email, phone, profession, picture, address, onClick, onClickEdit, id  }=props
  const styles = {
    card: {
      width: '290px',
      height: '178px',
      color: 'white',
      borderRadius: 10,
      cursor: 'pointer',
      padding: '1rem',
      background: 'rgba(255, 255, 255, 0.1)',
      boxShadow: ' 20px 20px 50px rgba(3, 3, 3, 0.5)',
      overflow: 'hidden',
      borderTop: ' 1px solid rgba(255, 255, 255, 0.5)',
      borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
      backdropFilter: 'bluar(5px)',
    },
  }
  return (
    <ReactFlipCard
     
      flipTrigger={'onClick'}
      frontStyle={styles.card}
      backStyle={styles.card}
      frontComponent={
        <div className='card-wrapper'>
         
          <div className='img'>
            <img
              src={picture}
              alt={name}
            />
          </div>
          <div className="row-card">
          <div className="name"><h2> {name}</h2></div>
          <div className='profession'>
            <p>{profession}</p>
          </div>
          </div>
        </div>
      }
      backComponent={
        <div className='back-component'>
          <p>📞 {phone}</p>
          <p>✉️ {email}</p>
          <p>🚩 {address}</p>
          <button  id={id} onClickCapture={onClick} className="delete">❌</button>
          <button  id={id} onClickCapture={onClickEdit} className="edit">🖊️</button>
        </div>
      }
      direction={'vertical'}
      containerStyle={{ width: '290px', height: '178px' }}
    />
  )
}

export default Card
