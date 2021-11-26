import React, {useContext, useState, useEffect, useCallback} from "react";
import fruit_menu from "./data/fruit_menu";
import UserContext from "./UserContext";


const CartItems = (props) => {
    const {carrinho, setCarrinho} = useContext(UserContext);
    const [currentFruit, setCurrentFruit] = useState();

    const carrinho2 = [...carrinho]
    
    const handleClick = (fruit) => {
        fruit.amount -= 1
        setCarrinho(carrinho2)
    }
    
    const removeItem = (fruit) => {
        if (fruit.amount > 0){
            fruit.amount -= 1
            return fruit.amount
        }
        
    }

    return (
        <>

            {carrinho2.map(fruit => fruit.amount > 0 ?
            (
                <div className="ControlCart">
                    <img className="border-0 ..." src={fruit.pictureUrl}></img>
                    <p>{fruit.name}</p>
                    <button onClick={() => handleClick(fruit)}>DIMINUIR</button>
                    <span>Quantidade:</span>
                    <p className="m-0 ...">{fruit.amount}</p>
                </div>
            ): (
                null
            )
            )}
            {/* <img className="border-0 ..." src={props.pictureUrl}></img>
            <p>{props.name}</p>
            <button>DIMINUIR</button>
            <span>Quantidade:</span>
            <p className="m-0 ...">{props.amount}</p> */}
        </>
    )
}

export default CartItems;