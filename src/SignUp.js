import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './Form.css';

const SignUp = ({submit}) => {

    let history = useHistory();
    const [items] = React.useState([
        {
          label: "Admin",
          value: "Admin"
        },
        {
          label: "Buyer",
          value: "Buyer"
        },
        { label: "Seller", 
        value: "Seller"
        }
      ]);
      const [values, setValues] = useState({
        username: '',
        email: '',
        age: '',
        select: '',
        password: '',
        password2: ''
      });
    const [errors, setErrors] = useState({});
    const [upSubmitted, setUpSubmitted] = useState(false);

    function validateInfo(values) {
        let errors = {};
      
        if (!values.username.trim()) {
          errors.username = 'Username required';
        }
        if (!values.age) {
          errors.age = 'Age required';
        } else if ((values.age.length < 2)) {
          errors.age = 'Age is invalid';
        }
        if (!values.email) {
          errors.email = 'Email required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email address is invalid';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 6) {
          errors.password = 'Password needs to be 6 characters or more';
        }
      
        if (!values.password2) {
          errors.password2 = 'Password is required';
        } else if (values.password2 !== values.password) {
          errors.password2 = 'Passwords do not match';
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
    
        setErrors(validateInfo(values));
        setUpSubmitted(true);

        if(values.username.length!==0 && values.email.length!==0 && values.age.length!==0 && values.select.length!==0 && values.password.length!==0 && values.password2.length!==0)
        { 
          var signup ={name:`${values.username}`, email:`${values.email}`,age:`${values.age}`,select:`${values.select}`,password:`${values.password}`,};
          localStorage.setItem('signup', JSON.stringify(signup));
          var retrievedObject = localStorage.getItem('signup');

          console.log('retrievedObject: ', JSON.parse(retrievedObject));
        }
    };

    const check = () => {
        if (Object.keys(errors).length === 0 && upSubmitted) {
          history.goBack('/SignIn');
        }
      }
    
    return (
    <div className='form-container'>
      <span className='close-btn'>×</span>
        <div className='form-content-left'>
              <h1
              style={{fontSize:'4rem'}}
              >
                Sign up
              </h1>
        </div>
        
        <div className='form-content-right'>
          <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
              Get started with us today! Create your account by filling out the
              information below.
            </h1>
            
            <div className='form-inputs'>
              <label className='form-label'>Username</label>
              <input
                className='form-input'
                type='text'
                name='username'
                placeholder='Enter your username'
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
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
              <label className='form-label'>Age</label>
              <input
                className='form-input'
                type='number'
                name='age'
                placeholder='Enter your age'
                value={values.age}
                onChange={handleChange}
              />
              {errors.age && <p>{errors.age}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Select</label>
              <select 
              className='form-input'
              onChange={handleChange}
              name='select'
              value={values.select}
              >
                {items.map(item => (
                  <option
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Confirm Password</label>
              <input
                className='form-input'
                type='password'
                name='password2'
                placeholder='Confirm your password'
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='form-input-btn' type='submit' onClick={check}>
              Sign up
            </button>
          </form>
        </div>
    </div>
    );
}

export default SignUp;