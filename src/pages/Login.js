import React, { Component } from 'react';
import {Container} from 'reactstrap'
import { withRouter } from '../libs/withRouter';

class Response extends String {json = () => JSON.parse(this)}

  function mockFetch(url, {body}) {
      const {email, password} = body
      if(email !== 'admin@admin.com' || password !== 'password')
      return Promise.reject("email atau password salah")

    return Promise.resolve(
        new Response(
            JSON.stringify({accessToken: 'pura2token'})
        )
    )      
  }

  class Login extends Component {
    state = {email: null, password: null}
    set = name => e => this.setState({[name]: e.target.value})
  
    handleSubmit = e => {
      console.log(this.props)
      e.preventDefault()
      const {email, password} = this.state
      const {history} = this.props
      mockFetch('http://api.example.com/v1/auth/login', {
        body: {email, password}
      })
      .then(response => response.json())
      .then(json => {
        localStorage.setItem('token', json.accessToken)
        this.props.history('/')
      })
      .catch(err => {alert(err)})
    }
  
    render(){
      return(
        <Container>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
          <label>Email <input type="email" name="email" onChange={this.set('email')} /></label>
          <label>Password <input type="password" name="password" onChange={this.set('password')} /></label>
          <input type="submit" value="submit" />
          </form>
        </Container>
      )
    }
  }
export default withRouter(Login);