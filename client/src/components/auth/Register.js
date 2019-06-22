import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('passwords do nat match');
    } else {
      console.log('Success');
      // const newUser = {
      //   name,
      //   email,
      //   password,
      // };
      // try {
      //   const config = {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   };
      //   const body = JSON.stringify(newUser);
      //   const res = await axios.post('/api/users', body, config);
      //   console.log(res.data);
      // } catch (err) {
      //   console.error(err.response.data);
      // }
    }
  };

  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => handleChange(e)}
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => handleChange(e)}
            name="email"
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            onChange={e => handleChange(e)}
            value={password}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            onChange={e => handleChange(e)}
            value={password2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </>
  );
};

export default Register;
