import React from 'react'
import '../styles/index.scss'
import logoSrc from '../images/pinguin-logo.svg'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      isNewUser: false
    }
  }

  handleChange({ target: { name: value } }) {
    this.setState({ [name]: value })
  }

  createAccount() {
    return (
      <div className='center column'>
        <input name='name' className='input' type='text' value='' placeholder='Name' style={{ width: 500 }} />
        <input name='password' className='input' type='password' value='' placeholder='Password' style={{ width: 500 }} />
        <button className='button' style={{ width: 500 }}>Create an account</button>
        <p style={{ color: 'white', cursor: 'pointer' }} onClick={() => this.setState({ isNewUser: false })}>Login to your account</p>
      </div>
    )
  }

  signIn() {
    return (
      <div className='center column'>
        <input name='name' className='input' type='text' value='' placeholder='Name' style={{ width: 500 }} />
        <input name='password' className='input' type='password' value='' placeholder='Password' style={{ width: 500 }} />
        <input name='verify-password' className='input' type='password' value='' placeholder='Verify password' style={{ width: 500 }} />
        <button className='button' style={{ width: 500 }}>Login</button>
        <p style={{ color: 'white', cursor: 'pointer' }} onClick={() => this.setState({ isNewUser: true })}>Create an account</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className='center' style={{ height: 400 }}>
          <img src={logoSrc} alt='pinguin logo' style={{ height: 150, marginBottom: -100 }} />
        </div>
        {!this.state.isNewUser ? this.signIn() : this.createAccount()}
      </div>
    )
  }
}