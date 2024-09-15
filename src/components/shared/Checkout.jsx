import { RiCloseFill } from "react-icons/ri";
import CardOrderItem from "./CardOrderItem"
import {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { setShowCheckout, setCloseCheckout } from "../../features/checkoutToShow/checkoutToShowSlice";
import {addOrder} from "../../features/order/orderSlice"
import {totalPrice} from "../../utils/totalPrice"
import {Link} from "react-router-dom"

function Checkout(props) {

    const [showButtons,setShowButtons]=useState(false)
    //para mostrar los botones del CardOrder 
    useEffect(()=>{
        setShowButtons(true)
    },[])
    // Redux
    const cartProducts = useSelector(state => state.carts) 
    const Dispatch = useDispatch()
    const showCheckout = useSelector(state => state.showCheckout)
    //console.log('cartProducts',cartProducts)

    //creacion del objeto que se guardara en un variable order de los pedidos
    const handleCheckout = () =>{
        const OrderToAdd = {
            date: "01/02/20024",
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        Dispatch(addOrder(OrderToAdd))
        Dispatch(setCloseCheckout())
    }
    
    return (
        <>
            {/* cheackout */}
            <div
                className={`text-white ${
                    showCheckout ? "right-0 top-0" : "-right-full hidden"
                } fixed bg-[#1f1d2b] w-full lg:w-[23%] lg:right-0 h-full p-4 flex flex-col rounded-tl-xl rounded-bl-xl z-10 transition-all`}
            >
                <header>
                    <button
                        onClick={() => Dispatch(setShowCheckout())}
                        className="bg-[#262837] p-2 rounded-full lg:hidden mb-2"
                    >
                        <RiCloseFill />
                    </button>
                    <p className="text-2xl text-gray-200 mb-4">My Order</p>
                </header>
                {/* info */}
                <div className="grid grid-cols-6 text-gray-200 mb-4 text-center">
                    <div className="col-span-3 text-left">Item</div>
                    <div className="col-span-2 text-left">Qty</div>
                    <div className="text-left">Price</div>
                </div>
                {/* box of the Order */}
                <div className="overflow-y-scroll flex-1">
                    {/* Order-Item */}
                    {cartProducts.map(product => <CardOrderItem key={product.id} showButtons={showButtons} product={product}/>)}
                    
                </div>
                {/* Tavbar total */}
                <div className="bg-[#262837] rounded-xl mt-4 mb-14 lg:mb-0">
                    <div className="flex justify-between px-4 py-6">
                        <p className="text-lg">Total:</p>
                        <p className="font-bold text-xl">{totalPrice(cartProducts)}</p>
                    </div>
                    <div>
                        <Link to="/my-order" className="block py-4 px-4 w-full text-white text-center bg-[#ec7c6a] rounded-xl">
                            <button onClick={handleCheckout}>
                                Continue to payment
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
