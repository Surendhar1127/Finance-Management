import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/user/login', { username, password });
      const response1 = await axios.get(`http://localhost:8080/user/getUserId?userName=${username}`);
      if (response.data !== 'fail' && response1.data !== 'fail') {
        console.log(`Response:${response.data}`);
        console.log(`Response:${response1.data}`);
        localStorage.setItem('token', response.data); 
        localStorage.setItem('userId', response1.data); 
        localStorage.setItem('userName', username); 
        navigate('/dashboard'); 
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex justify-content-center">
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3 col-md-6">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <NavLink  className="btn btn-primary ms-2 " to="/register">Register</NavLink>
      </form>
    </div>
    </main>
  );
};

export default Login;
