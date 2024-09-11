import {
    RiDeleteBin6Line,
    RiArrowDownSLine,
    RiArrowUpSLine,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { upAmount, downAmount, deleteProduct } from "../../features/cart/cartSlice"
import { subTotal } from "../../utils/subTotal"

function CardOrderItem(props) {
    //props para mostrar los botones
    const { showButtons, product } = props;
    // redux
    const Dispatch = useDispatch()
    const addProduct = (id)=>{
        Dispatch(upAmount(id))
    }
    const reduceProduct = (id) =>{
        Dispatch(downAmount(id))
    }
    const eleminateProduct = (id) =>{
        Dispatch(deleteProduct(id))
    }
    return (
        <>
            {/* Order-Item */}
            <div className="grid grid-cols-6 bg-[#262837] p-1 rounded-xl mb-4">
                <div className="flex gap-2 col-span-3 items-center">
                    <img
                        className="w-16 h-16 object-center rounded-lg"
                        src={product.image}
                        alt=""
                    />
                    <div className="flex flex-col">
                        <span>{product.category}</span>
                        <span>${product.price}</span>
                    </div>
                </div>
                <div className="text-center col-span-2">
                    <p>{product.amount}</p>
                    <div className="space-x-1">
                        <button
                            onClick={() => addProduct(product.id)}
                            className={`${
                                showButtons ? "" : "hidden"
                            } border border-red-500 p-2 mt-2`}
                        >
                            <RiArrowUpSLine className="text-red-500 text-lg rounded-lg" />
                        </button>
                        <button
                            onClick={() => reduceProduct(product.id)}
                            className={`${
                                showButtons ? "" : "hidden"
                            } border border-red-500 p-2 mt-2`}
                        >
                            <RiArrowDownSLine className="text-red-500 text-lg rounded-lg" />
                        </button>
                    </div>
                </div>
                <div className="text-right">
                    <p>${product.subTotal}</p>
                    <button
                        onClick={()=>{eleminateProduct(product.id)}}
                        className={`${
                            showButtons ? "" : "hidden"
                        } border border-red-500 p-2 mt-2`}
                    >
                        <RiDeleteBin6Line className="text-red-500 text-lg rounded-lg" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default CardOrderItem;
