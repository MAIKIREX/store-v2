import { RiArrowDownSLine } from "react-icons/ri";
import CardOrderItem from "./CardOrderItem";
import { useState } from "react";

function ordersCard(props) {
    const {order} = props
    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const [showButtons,setShowButtons]=useState(false)

    const ToggleOrderDetail = () => {
        setShowOrderDetail(!showOrderDetail);
        setShowButtons(false)
    };

    return (
        <div className=" lg:px-14 px-4 mb-4">
            <div
                className={`flex justify-between py-4 px-6 text-white border  items-center ${
                    showOrderDetail
                        ? "rounded-tl-xl rounded-tr-xl"
                        : "rounded-xl"
                }`}
            >
                <div>
                    <h2>fecha</h2>
                    <span>total productos {order.totalProducts}, total: ${order.totalPrice}</span>
                </div>
                <div>
                    <button
                        onClick={ToggleOrderDetail}
                        className="p-4 bg-[#1f1d2b] rounded-full"
                    >
                        <RiArrowDownSLine />
                    </button>
                </div>
            </div>
            <div
                className={`${
                    showOrderDetail ? "" : "hidden"
                } text-white border transition-all rounded-br-xl rounded-bl-xl`}
            >
                {/* info */}
                <div className="grid grid-cols-6 text-gray-200 mb-4 text-center px-4 mt-2">
                    <div className="col-span-4 text-left">Item</div>
                    <div>Qty</div>
                    <div className="text-right">Price</div>
                </div>
                {/* Order-Item */}
                {order.products.map(product => <CardOrderItem key={product.id} showButtons={showButtons} product={product}/>)}
            </div>
        </div>
    );
}

export default ordersCard;
