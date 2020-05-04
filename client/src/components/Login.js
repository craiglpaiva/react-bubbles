import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";


export const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formState, setFormState] = useState({ username: '', password: '' });

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  }

  const handleSubmit = e => {
    e.preventDefault();
  }


  axiosWithAuth().post('api/login', formState)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      props.history.push('/bubblepage');
    })
    .catch(err => {
      console.log(err);
      alert('Login Incorrect');
    })
}



return (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={this.handleChange}
      />
      <input
        type="password"
        name="password"
        value={formState.password}
        onChange={this.handleChange}
      />
      <button>Log in</button>
    </form>
  </div>
)

export default Login;