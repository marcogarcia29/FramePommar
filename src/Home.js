import React, {useEffect, useState} from "react";
import  fruitMenu  from "./data/fruit_menu";
import FruitCard from "./FruitCard";
import { useLocation } from "react-router";


const Home = () => {
    const location = useLocation();
    const [filtro, setFiltro] = useState()
    const query = new URLSearchParams(location.search)
    const getFruits = () => new Promise((resolve, reject) => {
        resolve(fruitMenu);
    })
    useEffect(() => {
       getFruits().then(fruits => setFiltro(() =>{
           return fruits.filter(fruit => fruit.name.includes(query))
       }))
    }, [query])
    
    
    return (
        <div className='home'>
            {fruitMenu.map(fruit =>
            (
                <FruitCard name={fruit.name} id={fruit.id} unitPrice={fruit.unitPrice}
                    pictureUrl={fruit.pictureUrl}
                />
            )
            )}{filtro?.map(fruit => (
                <FruitCard name={fruit.name} pictureUrl={fruit.pictureUrl} key={fruit.id} />
            )
            )
            }
        </div>
    );
}

export default Home;