import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import './Register.css'


export default function Register({onSignup}) {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const registerUser=(e)=>{
        e.preventDefault()
        onSignup(formData)
      }
  return (
    <div className='form-body'>
        <div className='form-inner-body'>
          <Form onSubmit={registerUser}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" name='username'  value={formData?.username} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='password' value={formData?.password} onChange={handleChange}/>
              </Form.Group>
             
                  <div className="d-grid gap-2">
                      <Button variant="dark" type='submit'>
                          Register
                      </Button>
                  </div>
          </Form>

        </div>

    </div>
  )
}
