import { RiAccountCircleLine, RiHandbagLine, RiLuggageCartLine, RiLightbulbFlashLine, RiMenuFill   } from "react-icons/ri";
import { setShowCheckout } from "../../features/checkoutToShow/checkoutToShowSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"

function Tavbar(props) {
    const showCheckout = useSelector(state => state.showCheckout)
    const Dispatch = useDispatch()
    const toggleShowCheckout = () =>{
        Dispatch(setShowCheckout())
        console.log(showCheckout)
    }
  return (
    <>
        {/* Tavbar */}
        <nav className="bg-[#1f1d2b] fixed w-full z-10 bottom-0 left-0 flex justify-between px-8 py-2 text-gray-200 text-3xl lg:hidden">
            <Link to="/my-orders" className="p-2">
                <RiHandbagLine/>
            </Link>
            <button 
                onClick={toggleShowCheckout}
                className="p-2">
                <RiLuggageCartLine />
            </button>
            <Link to="/signin" className="p-2">
                <RiAccountCircleLine/>
            </Link>
            <Link to="/" className="p-2">
                <RiMenuFill />
            </Link>
        </nav>
    </>
  )
}

export default Tavbar