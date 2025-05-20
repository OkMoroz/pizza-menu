interface OrderProps {
    openHour: number;
    closeHour: number;
}

const Order = ({ openHour, closeHour }: OrderProps) => {
    return (
        <div className="flex flex-col items-center gap-[2.4rem]">
            <p>
                We&#39;re open from {openHour}:00 to {closeHour}:00.{' '}
                <span>Come visit us or order online.</span>
            </p>
            <button className="btn p-8 text-inherit font-inherit text-2xl font-medium border-none bg-[#edc84b] hover:bg-[#e9bb24] cursor-pointer transition-all duration-200">
                Order
            </button>
        </div>
    );
};

export default Order;
