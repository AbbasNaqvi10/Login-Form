import React from 'react';
import {useHistory} from "react-router-dom";

const Admin = () => {

    let history = useHistory();

    const Buyer = () => {
        history.push('/BuyerList');
    }
    const Seller = () => {
        history.push('/SellerList');
    }

    return(
        <div>
            <h1 style={{textAlign:"center"}}>Welcome!</h1>
            <br></br>
            <button style={{width:"30%", 
            marginLeft:"35%", 
            height:"50px", 
            marginTop:"10px",
            outline:"none",
            border:"none",
            color:"#fff",
            fontSize:"1rem",
            backgroundColor:"#4CAF50",
            cursor:"pointer"
            }} type='button' onClick={Buyer}>
                View Buyer's List
            </button>

            <br></br>

            <button style={{width:"30%", 
            marginLeft:"35%", 
            height:"50px", 
            marginTop:"10px",
            outline:"none",
            border:"none",
            color:"#fff",
            fontSize:"1rem",
            backgroundColor:"#4CAF50",
            cursor:"pointer"
            }}  type='button' onClick={Seller}>
                View Seller's List
            </button>
        </div>
    )
}

export default Admin;