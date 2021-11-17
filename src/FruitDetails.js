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
        <div className="unity flex items-center ...">
            <img className="border-0 w-80 ..." src={thisFruit.pictureUrl}></img>
            <div className="flex bg-gray-300 md:w-full h-80 flex-col place-content-center md:place-items-start ...">
                <h1>{thisFruit.name}</h1>
                <p>{formatPrice(thisFruit.unitPrice)}</p>
            </div>
        </div>
    );
}

export default FruitDetails;