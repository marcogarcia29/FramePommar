import React, {useContext, useState, useEffect} from "react";


const CartItems = (props) => {


    return (
        <div className="ControlCart">
            <img className="border-0 ..." src={props.pictureUrl}></img>
            <p>{props.name}</p>
            <p>{props.amount}</p>
        </div>
    )
}

export default CartItems;