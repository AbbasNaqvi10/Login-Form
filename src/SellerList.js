import React from 'react';
import './Form.css';
import {useHistory} from "react-router-dom";

const SellerList = () => {

    let history = useHistory();

    var value = [],
        keys = Object.keys(localStorage),
        i = keys.length;

      while ( i-- ) {
        value.push(JSON.parse(localStorage.getItem(keys[i])));
        console.log(value)
      }
    if(value[2].length===0){
        alert("List Note Found! Please Signup Seller First");
        history.push('/SignUp');
    }

    var seller = [], j = value[1].length;

    while ( j-- ) {
        seller.push(value[1][j]);
        console.log(seller)
    }

    const TableHeader = () => {
       if(seller.length ===0){
          alert("No Record Founded! Please SignUp First");
          history.push('/SignUp');
       }
       else{
        let header = Object.keys(seller[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
      }
     }

    const TableData = () => {
      if(seller.length ===0){
         history.push('/SignUp');
      }
      else{
        return seller.map((seller, index) => {
           const {name, email, age, category, password } = seller //destructuring
           return (
              <tr>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>{age}</td>
                 <td>{category}</td>
                 <td>{password}</td>
              </tr>
           )
        })
      }
     }

     return (
        <div>
           <h1 id='title'>Seller's List</h1>
           <table id='value'>
              <tbody>
                 <tr>{TableHeader()}</tr>
                 {TableData()}
              </tbody>
           </table>
        </div>
     )
}

export default SellerList;