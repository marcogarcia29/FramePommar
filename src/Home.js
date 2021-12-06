import React, {useEffect, useState} from "react";
import  fruitMenu  from "./data/fruit_menu";
import FruitCard from "./FruitCard";
import { useLocation } from "react-router";


const Home = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('s');
    const filterFruits = (fruitMenu, query) => {
        if (!query) {
            return fruitMenu;
        }

        return fruitMenu.filter((fruit) => {
            const fruitName = fruit.name.toLowerCase();
            return fruitName.includes(query);
        });
    };

    const filteredFruits = filterFruits(fruitMenu, query);
    
    return (
        <div className='home'>
            {filteredFruits.map(fruit =>
            (
                <FruitCard name={fruit.name} id={fruit.id} unitPrice={fruit.unitPrice}
                    pictureUrl={fruit.pictureUrl}
                />
            )
            )
            }
        </div>
    );
}

export default Home;