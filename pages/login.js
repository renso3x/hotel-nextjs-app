import { useState } from 'react';
import axios from 'axios';
import cookies from 'next-cookies';
import { login } from '../utils/auth';

const Login = ({ apiUrl, token }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    error: ''
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const username = state.username;
    const url = apiUrl

    try {
      const response = await axios.post(url, {
        email: username,
        password: state.password
      });

      if (response.data) {
        login({ token: response.data.token })
      }

    } catch (error) {
      console.log('Error', error);
    }
  }

  return (
    <div>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Login</label>

          <input
            type='text'
            id='username'
            name='username'
            value={state.username}
            onChange={handleChange}
          />

          <input
            type='password'
            id='password'
            name='password'
            value={state.password}
            onChange={handleChange}
          />

          <button type='submit'>Login</button>

          <p className={`error ${state.error && 'show'}`}>
            {state.error && `Error: ${state.error}`}
          </p>
        </form>
      </div>
      <style jsx>{`
        .login {
          max-width: 340px;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        form {
          display: flex;
          flex-flow: column;
        }
        label {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          margin: 0.5rem 0 0;
          display: none;
          color: brown;
        }
        .error.show {
          display: block;
        }
      `}</style>
    </div>
  )
}

Login.getInitialProps = ctx => {
  const apiUrl = 'http://localhost:4000/authenticate';
  const { token } = cookies(ctx);

  if (token) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()
    } else {
      document.location.pathname = '/'
    }
  };

  return { apiUrl, token }
}

export default Login;