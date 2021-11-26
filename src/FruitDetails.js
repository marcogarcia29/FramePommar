import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./UserContext";
import fruit_menu from "./data/fruit_menu";

function FruitDetails() {
    const { fruitId } = useParams();
    const [currentFruit, setCurrentFruit] = useState();
    const {carrinho, setCarrinho} = useContext(UserContext);

    useEffect(() => {
        setCurrentFruit(() => fruit_menu.find(prod => prod.id === +fruitId))
    }, [])

    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
    }    

    const handleAddFruitToCart = (fruit) => {
        const getFruit = carrinho.find(prod => prod.name === fruit.name)
        if (getFruit) {
            fruit.amount += 1
        }else{
            fruit.amount += 1
            setCarrinho((prev) => [...prev, currentFruit])
        }
    }
        
    return (
        <>
            {currentFruit ? (
                <div className="unity flex ...">
                    <div className="create w-1/2">
                        <img className="border-b-0 ..." src={currentFruit.pictureUrl}></img>
                    </div>
                    <div className="unitPrizes">
                        <h1>{currentFruit.name}</h1>
                        <p>{formatPrice(currentFruit.unitPrice)}</p>
                        <button
                            onClick={() => handleAddFruitToCart(currentFruit)}
                        >
                            Comprar
                            <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/344/external-cart-essentials-icongeek26-flat-icongeek26.png"></img>
                        </button>
                    </div>
                </div>
            ) : (
                "Carregando Fruta..."
            )}
        </>
    );
}

export default FruitDetails;