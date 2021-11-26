import fruit_menu from "./data/fruit_menu";
import React, {useContext} from "react";
import CartItems from "./CartItems";
import UserContext from "./UserContext";

const CartView = () => {
    const {carrinho, setCarrinho} = useContext(UserContext);

    return (
        <div>
            <CartItems/>     
        </div>
    )
}

export default CartView; 