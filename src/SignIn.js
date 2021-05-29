import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './Form.css';

const SignIn = () => {
  var aemail = [], semail = [], bemail = [];
    let history = useHistory();
    const [values, setValues] = useState({
      email: '',
      password: '',
    });
    var admin = JSON.parse(localStorage.getItem('admin'));
    var buy = JSON.parse(localStorage.getItem('buyer'));
    var sell = JSON.parse(localStorage.getItem('seller'));
    const [errors, setErrors] = useState({});
    const [inSubmitted, setInSubmitted] = useState(false);
     
   if (admin === null && buy === null && sell === null){
      alert("Signup First Please!");
      history.push('/SignUp');
   }

   /*const Check_data = () => {
     var value = [],
        keys = Object.keys(localStorage),
        i = keys.length;

      while ( i-- ) {
        value.push(JSON.parse(localStorage.getItem(keys[i])));
        console.log(value)
      }
   
    var boss = [];
   if(value[0].length!==0){
     let j = value[0].length 
     for (i=0; i<j; i++) 
     {
     boss.push(value[0][j]);
     }
     for (i=0; i<j; i++) 
     {
      console.log(boss[i].email);
      console.log(boss[i].password);
     }
   }

    var seller = [];
    if(value[1].length!==0){
     let j = value[1].length
     for (i=0; i<j; i++)  {
       seller.push(value[1][i]);
     }
     for (i=0; i<j; i++) {
      console.log(seller[i].email);
      console.log(seller[i].password);
     }
   }

    var buyer = [];
    if(value[2].length!==0){
     let j = value[2].length
     for (i=0; i<j; i++)  {
       buyer.push(value[2][i]);
     }
     for (i=0; i<j; i++) {
      console.log(bemail[i]);
      console.log(buyer[i].password);
     }
   }

     if(boss.length!==0 && seller.length!==0 && buyer.length!==0){
       for(i=0;i<=boss.length;i++){
         if(values.email===boss.email[i] && values.password===[i]){
           history.push('/Admin');
         }
       }
       for(i=0;i<=seller.length;i++){
         if(values.email===seller.email && values.password===seller.password){
           history.push('/Seller');
         }
       }
       for(i=0;i<=buyer.length;i++){
         if(values.email===buyer.email && values.password===buyer.password){
           history.push('/Buyer');
         }
       }
     }
     else if(boss.length===0 && seller.length!==0 && buyer.length!==0){
       for(i=0;i<=seller.length;i++){
         if(values.email===seller.email && values.password===seller.password){
           history.push('/Seller');
         }
       }
       for(i=0;i<=buyer.length;i++){
         if(values.email===buyer.email && values.password===buyer.password){
           history.push('/Buyer');
         }
       }
     }
     else if(boss.length!==0 && seller.length===0 && buyer.length!==0){
       for(i=0;i<=boss.length;i++){
         if(values.email===boss.email && values.password===boss.password){
           history.push('/Admin');
         }
       }
       for(i=0;i<=buyer.length;i++){
         if(values.email===buyer.email && values.password===buyer.password){
           history.push('/Buyer');
         }
       }
     }
     else if(boss.length!==0 && seller.length!==0 && buyer.length===0){
       for(i=0;i<=boss.length;i++){
         if(values.email===boss.email && values.password===boss.password){
           history.push('/Admin');
         }
       }
       for(i=0;i<=seller.length;i++){
         if(values.email===seller.email && values.password===seller.password){
           history.push('/Seller');
         }
       }
     }
   }*/
  

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
        if (admin.length!==0 && sell.length!==0 && buy.length!==0) {

        var value = [],
        keys = Object.keys(localStorage),
        i = keys.length;

      while ( i-- ) {
        value.push(JSON.parse(localStorage.getItem(keys[i])));
        //console.log(value)
      }
   
    var boss = [];
   if(value[0].length!==0){
     let j = value[0].length 
     for (i=0; i<j; i++) 
     {
     boss.push(value[0][i]);
     //console.log(boss);
     }
     for (i=0; i<j; i++) 
     {
      aemail[i] = boss[i].email;
      console.log(boss[i].password);
     }
     console.log("/n");
   }

    var seller = [];
    if(value[1].length!==0){
     let j = value[1].length
     for (i=0; i<j; i++)  {
      seller.push(value[1][i]);
     }
     for (i=0; i<j; i++) {
      semail[i] = seller[i].email;
      console.log(seller[i].password);
     }
     console.log("/n");
   }

    var buyer = [];
    if(value[2].length!==0){
     let j = value[2].length
     for (i=0; i<j; i++)  {
      buyer.push(value[2][i]);
     }
     for (i=0; i<j; i++) {
      bemail[i] = buyer[i].email;
      console.log(buyer[i].password);
     }
     console.log("/n");
   }

   if(boss.length!==0 && seller.length!==0 && buyer.length!==0){
    for(i=0;i<=boss.length;i++){
      if(values.email===aemail[i] && values.password===boss[i].password){
        history.push('/Admin');
      }
    }
    for(i=0;i<=seller.length;i++){
      if(values.email===semail[i] && values.password===seller[i].password){
        history.push('/Seller');
      }
    }
    for(i=0;i<=buyer.length;i++){
      if(values.email===bemail[i] && values.password===buyer[i].password){
        history.push('/Buyer');
      }
    }
  }
  else if(boss.length===0 && seller.length!==0 && buyer.length!==0){
    for(i=0;i<=seller.length;i++){
      if(values.email===semail[i] && values.password===seller[i].password){
        history.push('/Seller');
      }
    }
    for(i=0;i<=buyer.length;i++){
      if(values.email===bemail[i] && values.password===buyer[i].password){
        history.push('/Buyer');
      }
    }
  }
  else if(boss.length!==0 && seller.length===0 && buyer.length!==0){
    for(i=0;i<=boss.length;i++){
      if(values.email===aemail[i] && values.password===boss[i].password){
        history.push('/Admin');
      }
    }
    for(i=0;i<=buyer.length;i++){
      if(values.email===bemail[i] && values.password===buyer[i].password){
        history.push('/Buyer');
      }
    }
  }
  else if(boss.length!==0 && seller.length!==0 && buyer.length===0){
    for(i=0;i<=boss.length;i++){
      if(values.email===aemail[i] && values.password===boss[i].password){
        history.push('/Admin');
      }
    }
    for(i=0;i<=seller.length;i++){
      if(values.email===semail[i] && values.password===seller[i].password){
        history.push('/Seller');
      }
    }
  }
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