import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './Form.css';

const SignIn = () => {
    let history = useHistory();
    const [values, setValues] = useState({
      email: '',
      password: '',
    });
    var data = JSON.parse(localStorage.getItem('signup'));
    const [errors, setErrors] = useState({});
    const [inSubmitted, setInSubmitted] = useState(false);
    
   if (localStorage.getItem("signup") === null){
    // var signup ={email:'test@gmail.com', password:'test123'};
    // localStorage.setItem('signup', JSON.stringify(signup));
    // data = JSON.parse(localStorage.getItem('signup'));
    // console.log(data);
    alert("Signup First Please!");
    history.push('/SignUp');
   }
    
    function validateInfo(values) {
      let errors = {};
    
      if (!values.email.trim()) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
      }
    
      return errors;
    }

    const handleChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
    };

    const handleSubmit = e => {
      e.preventDefault();
      setInSubmitted(true);
      setErrors(validateInfo(values));
    };
    
    const check = () => {
      if (Object.keys(errors).length === 0 && inSubmitted) {
        if(data.email===values.email && values.password===data.password){
          history.push('/Dashboard');
        }
        else{
          alert("Wrong Email Or Password. SignUp First Please!");
          history.push('/SignUp');
        }
    }
  }

    return (
      <div className='form-container' style={{height:'500px'}}>
        <span className='close-btn'>×</span>
          <div className='form-content-left'>
              <h1
              style={{fontSize:'4rem'}}
              >
                Sign In
              </h1>
          </div>
          <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
              
              <div className='form-inputs'>
                <label className='form-label'>Email</label>
                <input
                  className='form-input'
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className='form-inputs'>
                <label className='form-label'>Password</label>
                <input
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Enter password'
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <button className='form-input-btn' type='submit' onClick={check}>
                Sign in
              </button>
            </form>
          </div>
      </div>
    );
};

export default SignIn;