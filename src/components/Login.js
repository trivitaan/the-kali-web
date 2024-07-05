import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctPassword = '123456'; // Set your password here
    if (password === correctPassword) {
      navigate('/home');
    } else {
      alert('Wrong password!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='container'>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
