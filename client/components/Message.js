import React, { Component } from 'react'
import '../styles/index.scss'

const Message = ({ message, isCurrentUser }) => (
  <div className={isCurrentUser ? 'message current' : 'message'}>
    <div className='message-wrapper'>
      <div>
        <img src={`https://robohash.org/${message.name}`} className='thumb' />
      </div>
      <div className='block'>
        <p className='username'>{isCurrentUser ? 'You' : message.name}</p>
        <div className='text'>{message.text}</div>
      </div>
    </div>
  </div>
)

export default Message