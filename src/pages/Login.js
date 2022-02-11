import React, { Component, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import { withRouter } from '../libs/withRouter';
import { auth } from '../service/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = (props) => {
  const [inputValue, setInputValue] = useState({email: '', password:''})
  const {email, password} = inputValue
  const handleChange = (e) => {
    const {name, value} = e.target
    setInputValue({...inputValue, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const isLogin = userCredential.user
      if(isLogin){
        setInputValue({email: '', password:''})
        props.history('/')
      }
    })
    .catch(err => {
        alert(err.message)
    })
  }
  return (
    <Container className='container-xl d-flex justify-content-center align-items-center flex-column vh-100'>
      <h3 className='text-center'>Login</h3>
      <Form inline onSubmit={handleSubmit} className='w-50 text-center'>
        <FormGroup floating>
          <Input id='email' name='email' type='email' placeholder='Email' value={email} onChange={handleChange} />
          <Label for='email'>Email</Label>
        </FormGroup>
        <FormGroup floating>
          <Input id='password' name='password' type='password' placeholder='Password' value={password} onChange={handleChange} />
          <Label for='password'>Password</Label>
        </FormGroup>
        <Button color='primary' type='submit' className='w-100 btn-lg'>Login</Button>
      </Form>
    </Container>
  )
}

export default withRouter(Login);