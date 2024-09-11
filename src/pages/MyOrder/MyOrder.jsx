import CardOrderItem from "../../components/shared/CardOrderItem";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function MyOrder() {
    const [showButtons, setShowButtons] = useState(false);
    useEffect(() => {
        setShowButtons(false);
    }, []);
    // Redux
    const cartProducts = useSelector(state => state.carts) 
    return (
        <div className="flex flex-col text-gray-300 p-4 lg:pl-36 lg:pr-8">
            <h1 className="text-2xl font-bold text-gray-300 my-4 text-center">My Orders</h1>
            {/* info */}
            <div className="grid grid-cols-6 text-gray-200 mb-4 text-center">
                <div className="col-span-4 text-left">Item</div>
                <div>Qty</div>
                <div>Price</div>
            </div>
            {cartProducts.map(product => <CardOrderItem key={product.id} showButtons={showButtons} product={product}/>)}
        </div>
    );
}

export default MyOrder;
