import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './assets/styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async() => {
  
    const data = await axios.post("http://127.0.0.1:5000/api/login", {
      email: email,
      password: password
    })
    setToken(data.data.token)
    localStorage.setItem('token', JSON.stringify(data.data.token))

    console.log(data);
};

useEffect(() => {
  const token = JSON.parse(localStorage.getItem('token'))
  if(token)
    navigate('/upload')
  else
    navigate('/')

  }, [navigate, token])

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
