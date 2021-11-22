import React, {useContext, useState, useEffect} from "react";


const CartItems = (props) => {


    return (
        <div>
            <span>{props.name}</span>
            <img src={props.pictureUrl}></img>
            <p>{props.amount}</p>
        </div>
    )
}

export default CartItems;