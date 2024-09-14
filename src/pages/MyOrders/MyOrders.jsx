import OrdersCard from "../../components/shared/OrdersCard"; // Usa mayúsculas

import { useSelector, } from "react-redux";

function MyOrders() {
    const orders = useSelector((state) => state.orders);

    return (
        <div className="lg:pl-28">
            <h1 className="text-gray-200 text-xl font-bold lg:px-14 pt-4 mb-4 px-4">
                My Orders
            </h1>
            {orders.map((order) => (
                <OrdersCard key={order.id} order={order} /> // Usa el nombre con mayúscula
            ))}
        </div>
    );
}

export default MyOrders;
