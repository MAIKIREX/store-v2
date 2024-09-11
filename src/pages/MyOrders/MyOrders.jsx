import { RiArrowDownSLine } from "react-icons/ri";
import CardOrderItem from "../../components/shared/CardOrderItem";
import { useState } from "react";

function MyOrders() {
    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const [showButtons,setShowButtons]=useState(false)

    const ToggleOrderDetail = () => {
        setShowOrderDetail(!showOrderDetail);
        setShowButtons(false)
    };


    return (
        <div className="lg:pl-28">
            <h1 className="text-gray-200 text-xl font-bold lg:px-14 pt-4 mb-4 px-4">
                My Orders
            </h1>
            <div className=" lg:px-14 px-4 ">
                <div className={`flex justify-between py-4 px-6 text-white border  items-center ${showOrderDetail ? "rounded-tl-xl rounded-tr-xl" : "rounded-xl"}`}>
                    <div>
                        <h2>fecha</h2>
                        <span>total productos subtotal</span>
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
                    <CardOrderItem showButtons={showButtons}/>
                    <CardOrderItem />
                    <CardOrderItem />
                </div>
            </div>
        </div>
    );
}

export default MyOrders;
