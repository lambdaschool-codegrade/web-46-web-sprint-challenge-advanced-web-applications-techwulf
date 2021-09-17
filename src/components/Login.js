import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const { push } = useHistory();

  const [creds, setCreds] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('');

  //replace with error creds
  const handleChange = evt => {
    setCreds({
      ...creds,
      [evt.target.name]: evt.target.value
    })
  }
  const login = evt => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/api/login", creds)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        push('/bubbles');
      })
      .catch(err => {
        setError(err.response);
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={login}>
          <label>Username
            <input
              type="text"
              name="username"
              id="username"
              value={creds.username}
              onChange={handleChange}
            />
          </label>
          <label>Password
            <input
              type="password"
              name="password"
              id="password"
              value={creds.password}
              onChange={handleChange}
            />
          </label>
          <button id="submit">Log in</button>
        </form>
        <p id="error">{error}</p>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever creds necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"