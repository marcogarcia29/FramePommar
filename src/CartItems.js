import React, {useContext, useState, useEffect, useCallback} from "react";
import fruit_menu from "./data/fruit_menu";
import UserContext from "./UserContext";


const CartItems = () => {
    const {carrinho, setCarrinho} = useContext(UserContext);
    const carrinho2 = JSON.parse(JSON.stringify(carrinho))
    const {valor, setValor} = useContext(UserContext);
    
    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
    }  

    const removeItem = (fruit) => {
        fruit.amount -= 1
        if (fruit.amount >= 1) {
            setValor(valor - fruit.unitPrice)
        }else {
            setValor(valor - fruit.unitPrice)
        }
        setCarrinho(carrinho2)
        
    }

    const AddItem = (fruit) => {
        fruit.amount += 1
        if (fruit.amount >= 1) {
            setValor(fruit.unitPrice + valor)
        }
        setCarrinho(carrinho2)
    }

    return (
        <>

            {carrinho2.map(fruit => fruit.amount >= 1 ?
            (
                <div className="ControlCart">
                    <img className="border-0 ..." src={fruit.pictureUrl}></img>
                    <p>{fruit.name}</p>
                    <button onClick={() => removeItem(fruit)}>DIMINUIR</button>
                    <span>Quantidade:</span>
                    <p className="m-0 ...">{fruit.amount}</p>
                    <button onClick={() => AddItem(fruit)}>AUMENTAR</button>
                </div>
            ): (
                null
            )
            )}
            <div>
                {formatPrice(valor)}
            </div>
        </>
        
    )
}

export default CartItems;