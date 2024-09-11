import { RiAccountCircleLine, RiHandbagLine, RiLuggageCartLine, RiLightbulbFlashLine   } from "react-icons/ri";


function Tavbar(props) {
    const {toggleShowCheckout} = props
  return (
    <>
        {/* Tavbar */}
        <nav className="bg-[#1f1d2b] fixed w-full z-10 bottom-0 left-0 flex justify-between px-8 py-2 text-gray-200 text-3xl lg:hidden">
            <button className="p-2">
                <RiLightbulbFlashLine/>
            </button>
            <button className="p-2">
                <RiHandbagLine/>
            </button>
            <button 
                onClick={toggleShowCheckout}
                className="p-2">
                <RiLuggageCartLine />
            </button>
            <button className="p-2">
                <RiAccountCircleLine/>
            </button>
        </nav>
    </>
  )
}

export default Tavbar