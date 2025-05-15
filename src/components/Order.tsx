interface OrderProps {
    openHour: number;
    closeHour: number;
}

const Order = ({ openHour, closeHour }: OrderProps) => {
    return (
        <div className="order">
            <p>
                We&#39;re open from {openHour}:00 to {closeHour}:00.{' '}
                <span>Come visit us or order online.</span>
            </p>
            <button className="btn">Order</button>
        </div>
    );
};

export default Order;
