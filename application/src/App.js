
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Register from "./Components/Register/Register";
import Login from './Components/Login/Login';


function App() {
  const [users, setUsers] = useState([]);

  const handleSignup = (userData) => {
    setUsers([...users, userData]);
  };

  const handleLogin = (loginData) => {
    // Check if the user exists in the local state
    const userExists = users.some(
      (user) => user.username === loginData.username && user.password === loginData.password
    );

    if (userExists) {
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };
  return (
    <div style={{ display:'flex',justifyContent:'space-between'}}>
      <Register onSignup={handleSignup} />
     
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
