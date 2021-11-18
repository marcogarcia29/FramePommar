import React from "react";
import { useParams } from "react-router-dom";
import fruit_menu from "./data/fruit_menu";

function FruitDetails() {
    const {fruitId}  = useParams();
    const ifruitId = parseInt(fruitId, 10)
    const thisFruit = fruit_menu.find(prod => prod.id === ifruitId)
    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
    }

    return (
        <div className="unity flex ...">
            <div className="create w-1/2">
                <img className="border-0" src={thisFruit.pictureUrl}></img>
            </div>
            <div className="unitPrizes">
                <h1>{thisFruit.name}</h1>
                <p>{formatPrice(thisFruit.unitPrice)}</p>
                <button>
                    Comprar
                    <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/344/external-cart-essentials-icongeek26-flat-icongeek26.png"></img>
                </button>
            </div>
        </div>
    );
}

export default FruitDetails;