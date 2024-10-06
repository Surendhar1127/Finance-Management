import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    console.log("1111");
    e.preventDefault();

    if (password !== confirmPassword) {
        console.log("22222");
      setError('Passwords do not match');
      return;
    }

    try {
        console.log("33");
        const response = await axios.post('http://localhost:8080/user/register', { username,email, password });
        console.log(`Res:${response.data}`);
        console.log("44");
      console.log({ username, email, password });

      if (response.data !== 'fail' ) {
        console.log("55");
        console.log(`Response:${response.data}`);
        navigate('/login'); 
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred during registration');
    }
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex justify-content-center">
    <div className="container mt-5">
      <h2>Register</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleRegister}>
        <div className="mb-3 col-md-6">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username" 
            value={username} 
            onChange={(e) => {console.log(e.target); setUsername(e.target.value)}} 
            required 
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
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
        <div className="mb-3 col-md-6">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
    </main>
  );
};

export default Register;
