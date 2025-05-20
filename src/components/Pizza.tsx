interface PizzaType {
    name: string;
    ingredients: string;
    price: number | string;
    photoName: string;
    soldOut: boolean;
}

type PizzaProps = {
    pizzaObj: PizzaType;
};
const Pizza = ({ pizzaObj }: PizzaProps) => {
    const { name, ingredients, price, photoName, soldOut } = pizzaObj;
    return (
        <li className={`flex gap-12 ${soldOut ? 'text-gray-500' : ''}`}>
            <img
                className={`w-48 aspect-square self-start ${soldOut ? 'grayscale opacity-80' : ''}`}
                src={`/${photoName}`}
                alt={name}
            />
            <div className="flex flex-col gap-3 pb-24">
                <h3 className="font-normal text-3xl">{name}</h3>
                <p className="text-[1.4rem] font-light italic mb-auto">{ingredients}</p>
                <span className="block text-2xl">{soldOut ? 'SOLD OUT' : price}</span>
            </div>
        </li>
    );
};

export default Pizza;
