import { RiAccountCircleLine, RiHandbagLine, RiLogoutBoxLine  } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-28 h-full bg-[#1f1d2b] text-white fixed top-0 lg:left-0 -left-full flex flex-col justify-between py-4">
            <div >
                <div className="p-4">
                    <Link to='/'><h1 className="text-center">Logo</h1></Link>
                </div>
                <ul className="pl-4">
                    <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group">
                        <Link to="/signin" className="group-hover:bg-[#ec7c6a] group-hover:text-[white] flex justify-center p-4 rounded-xl text-[#ec7c6a]">
                            <RiAccountCircleLine className="text-3xl"/>
                        </Link>
                    </li>
                    <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group">
                        <Link to="/my-orders" className="group-hover:bg-[#ec7c6a] group-hover:text-[white] flex justify-center p-4 rounded-xl text-[#ec7c6a]">
                            <RiHandbagLine className="text-3xl"/>
                        </Link>
                    </li>
                    <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group">
                        <Link to="/my-account" className="group-hover:bg-[#ec7c6a] group-hover:text-[white] flex justify-center p-4 rounded-xl text-[#ec7c6a]">
                            <RiHandbagLine className="text-3xl"/>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="pl-4">
                    <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group">
                        <Link href="#" className="group-hover:bg-[#ec7c6a] group-hover:text-[white] flex justify-center p-4 rounded-xl text-[#ec7c6a]">
                            <RiLogoutBoxLine  className="text-3xl"/>
                        </Link>
                    </li>
                </ul>
            </div>

    
    </div>
  )
}

export default Navbar