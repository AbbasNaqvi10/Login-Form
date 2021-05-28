import React from 'react';
import './Form.css';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Error from './Error';
import Admin from './Admin';
import Seller from './Seller';
import Buyer from './Buyer';

const Form = () => {

    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={SignIn}></Route>
                    <Route exact path='/SignUp' render={() => <SignUp submit={false}/>} />
                    <Route exact path='/Dashboard' component={Dashboard}></Route>
                    <Route exact path='/Admin' component={Admin}></Route>
                    <Route exact path='/Seller' component={Seller}></Route>
                    <Route exact path='/Buyer' component={Buyer}></Route>
                    <Route component={Error}/>
                </Switch>
            </Router>
        </div>
    );
}

export default Form;