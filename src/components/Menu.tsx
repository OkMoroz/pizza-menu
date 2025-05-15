import { pizzaData } from '@/data/pizzaData.js';
import Pizza from './Pizza';

const Menu = () => {
    return (
        <main className="menu">
            <h2>Our pizza</h2>
            <ul className="pizzas">
                {pizzaData.map(pizza => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
            </ul>
        </main>
    );
};

export default Menu;
