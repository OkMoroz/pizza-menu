import { pizzaData } from '@/data/pizzaData.js';
import Pizza from './Pizza';

const Menu = () => {
    return (
        <main className="flex flex-col items-center gap-16">
            <h2 className="inline-block border-t-2 border-b-2 border-current uppercase tracking-[3px] font-medium text-5xl">
                Our pizza
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 list-none">
                {pizzaData.map(pizza => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
            </ul>
        </main>
    );
};

export default Menu;
