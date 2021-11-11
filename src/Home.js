import { fruitMenu } from "./data/fruit_menu";
import FruitCard from "./FruitCard";

const Home = () => {

    return (
        <div className='home'>
            {fruitMenu.map(fruit =>
            (
                <FruitCard name={fruit.name} id={fruit.id} unitPrice={fruit.unitPrice}
                    pictureUrl={fruit.pictureUrl}
                />
            )
            )}
        </div>
    );
}

export default Home;