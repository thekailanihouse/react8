import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import {auth} from '../service/firebase'

const Register = () => {
    //declare state [inputValue, setInputValue] untuk menampung nilai dari input
    const [inputValue, setInputValue] = useState({email: '', password: ''})
    //nilai object dari inputValue
    const {email, password} = inputValue


    //handle untuk onchange value pada input
    const handleChange = e => {
        const {name, value} = e.target
        //...input artinya akan mengambil semua nilai state lalu merubah dengan [name] dari input name
        setInputValue(input => ({...input, [name]:value}))
    }

    //handleSubmit digunakan untuk handle form 
    const handleSubmit = e => {
        e.preventDefault()
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //jika berhasil register akan reset input value
                if(user){
                    setInputValue({email: '', password: ''})
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({errorCode, errorMessage})
            });
    }
    
  return (
    <>
    <Container className='container-xl d-flex justify-content-center align-items-center flex-column vh-100'>
        <h3 className='text-center'>Register</h3>
    <Form inline onSubmit={handleSubmit} className='w-50 text-center'>
        <FormGroup floating>
            <Input id='email' name='email' type='email' placeholder='Email' value={email} onChange={handleChange} />
            <Label for='email'>Email</Label>
        </FormGroup>
        <FormGroup floating>
            <Input id='password' name='password' type='password' placeholder='Password' value={password} onChange={handleChange} />
            <Label for='password'>Password</Label>
        </FormGroup>
        <Button color='primary' type='submit' className='w-100 btn-lg'>Register</Button>
    </Form>
    </Container>
    </>
  )
};

export default Register;
