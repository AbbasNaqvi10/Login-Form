import React from 'react';
import './Form.css';
import {useHistory} from "react-router-dom";

const BuyerList = () => {

    let history = useHistory();

    var value = [],
        keys = Object.keys(localStorage),
        i = keys.length;

      while ( i-- ) {
        value.push(JSON.parse(localStorage.getItem(keys[i])));
        console.log(value)
      }

    var buyer = [], j = value[2].length;
        
    while ( j-- ) {
        buyer.push(value[2][j]);
        console.log(buyer)
    }

    const TableHeader = () => {
      if(buyer.length ===0){
         alert("No Record Founded! Please SignUp First");
         history.push('/SignUp');
      }
      else{
        let header = Object.keys(buyer[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
      }
     }

    const TableData = () => {
      if(buyer.length ===0){
         history.push('/SignUp');
      }
      else{
        return buyer.map((buyer, index) => {
           const {name, email, age, category, password } = buyer //destructuring
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
           <h1 id='title'>Buyer's List</h1>
           <table id='value'>
              <tbody>
                 <tr>{TableHeader()}</tr>
                 {TableData()}
              </tbody>
           </table>
        </div>
     )
}

export default BuyerList;