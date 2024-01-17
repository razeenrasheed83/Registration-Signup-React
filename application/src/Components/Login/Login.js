import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './Login.css'

export default function Login({onLogin}) {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
      });

      const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
      };
    
      const userLogin = (e) => {
        e.preventDefault();
        onLogin(loginData);
      };
  return (
    <div>
        <div className='form-body'>
        <div className='form-inner-body'>
          <Form onSubmit={userLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" name='username'  value={loginData?.username} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='password' value={loginData?.password} onChange={handleChange}/>
              </Form.Group>
             
                  <div className="d-grid gap-2">
                      <Button variant="dark" type='submit'>
                          Login
                      </Button>
                  </div>
          </Form>

        </div>

    </div>
    </div>
  )
}
