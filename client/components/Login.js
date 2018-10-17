import React from 'react'
import '../styles/index.scss'
import logoSrc from '../images/pinguin-logo.svg'
import axios from 'axios'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      isNewUser: false,
      email: '',
      username: '',
      password: '',
      'verify-password': ''
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target);

    fetch('/api/user', {
      method: 'POST',
      body: data,
    });
  }

  createAccount() {
    return (
      <div className='center column'>
        <input name='username' className='input' type='text'   /*value={this.state.username}*/ placeholder='Username' style={{ width: 500 }} onChange={e => this.handleChange(e)} />
        <input name='email' className='input' type='text'  /* value={this.state.email}*/ placeholder='Email' style={{ width: 500 }} onChange={e => this.handleChange(e)} />
        <input name='password' className='input' type='password'  /* value={this.state.password}*/ placeholder='Password' style={{ width: 500 }} onChange={e => this.handleChange(e)} />
        <input name='verify-password' className='input' type='password' placeholder='Verify Password' style={{ width: 500 }}  /* value={this.state['verify-password']} */onChange={(e) => this.handleChange(e)} />
        <button className='button' style={{ width: 500 }}>Create an account</button>
        <p style={{ color: 'white', cursor: 'pointer' }} onClick={() => this.setState({ isNewUser: false })}>Login to your account</p>
      </div>
    )
  }

  signIn() {
    return (
      <div className='center column'>
        <input name='username' className='input' type='text' /*value={this.state.username}*/ placeholder='Username' style={{ width: 500 }} onChange={(e) => this.handleChange(e)} />
        <input name='email' className='input' type='text'/* value={this.state.email}*/ placeholder='Email' style={{ width: 500 }} onChange={e => this.handleChange(e)} />
        <input name='password' className='input' type='password' /*value={this.state.password}*/ placeholder='Password' style={{ width: 500 }} onChange={(e) => this.handleChange(e)} />
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
        <form onSubmit={e => this.handleSubmit(e)}>
          {!this.state.isNewUser ? this.signIn() : this.createAccount()}
        </form>
      </div>
    )
  }
}