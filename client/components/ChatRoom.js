import React from 'react'
import '../styles/index.scss'
import io from 'socket.io-client'
import Message from './Message'

export default class ChatRoom extends React.Component {
  constructor() {
    super()
    this.state = {
      current: window.location.hash.slice(1) || 'Ash',
      text: '',
      messages: [
        { name: 'Ash', text: `yeah thought about that` },
        { name: 'Ash', text: `but I'd rather just go to the store` },
        { name: 'Keya', text: `yooo Wu Wei Din tho.` },
        { name: 'Ash', text: `let's go get it this weekend` },
        { name: 'Keya', text: `pork chops and fried rice..mmm` },
        { name: 'Ash', text: `need to save money tho. shieeeet` },
        { name: 'Keya', text: `payday this friday for me, suckx for u` },
      ]
    }
  }

  componentDidMount() {
    this.socket = io('http://localhost:8080')
    this.socket.on('chat message', (message) => this.pushMessage(message))
  }

  pushMessage(message) {
    if(message.name !== this.state.current) this.setState({ messages: [...this.state.messages, message] })
  }

  componentWillUnmount() {
    this.socket.close()
  }

  displayMessages() {
    return this.state.messages.map((message, index) => (
      <Message 
        key={index} 
        isCurrentUser={message.name === this.state.current} 
        message={message} />
    ))
  }

  handleChange({ target: { value } }) {
    this.setState({ text: value })
  }

  handleKeyPress(e) {
    if (e.charCode === 13 && this.state.text.length > 0) {
      e.preventDefault()

      const message = {
        name: this.state.current,
        text: this.state.text
      }

      const messages = [...this.state.messages, message]

      this.socket.emit('chat message', message)

      this.setState({ text: '', messages })
    }
  }

  render() {
    return (
      <div>
        <div className='chat'>
          <div className='chat-wrapper'>
            {this.displayMessages()}
          </div>
        </div>
        <div className='textbox'>
          <textarea
            value={this.state.text}
            onChange={(e) => this.handleChange(e)}
            onKeyPress={(e) => this.handleKeyPress(e)}
            placeholder={`Write a message and press Enter to Send`} />
        </div>
      </div>
    )
  }
}