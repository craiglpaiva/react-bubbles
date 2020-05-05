import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [formState, setFormState] = useState({ username: 'Lambda School', password: 'i<3Lambd4' });

  const handleOnChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
    console.log(formState);
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('/api/login', formState)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push('/bubblePage');
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Welcome to the Bubbles Page!</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleOnChange} value={formState.username}
        />
        <label>Password</label>
        <input type="password" name="password" onChange={handleOnChange} value={formState.password}
        />
        <button>Log in</button>
      </form>
    </div>
  )
}
export default Login;