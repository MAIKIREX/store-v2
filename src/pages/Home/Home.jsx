import Card from "../../components/shared/Card";
import { useState, useEffect } from "react";
import ProductDetail from "../../components/shared/ProductDetail";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
    setOpenCheckout,
    setCloseCheckout,
} from "../../features/checkoutToShow/checkoutToShowSlice";

function Home() {
    const [showDetail, setShowDetail] = useState(false);
    const [item, setItem] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const toggleShowDetail = () => {
        setShowDetail(!showDetail);
    };

    useEffect(() => {
        const handleResize = () => {
            const isSmall = window.innerWidth > 768;
            if (isSmall) {
                dispatch(setOpenCheckout());
            } else {
                dispatch(setCloseCheckout());
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchItems();
    }, []);

    // Filtrar productos por categoría y búsqueda
    const filteredItems = item
        .filter((product) => selectedCategory ? product.category === selectedCategory : true)
        .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <>
            <ProductDetail showDetail={showDetail} toggleShowDetail={toggleShowDetail} />
            <div className="grid grid-cols-1 lg:grid-cols-8 lg:pl-28">
                <div className="lg:col-span-6 p-4">
                    <header className="flex flex-col mb-4 md:flex-row md:justify-between md:items-center">
                        <div>
                            <h1 className="text-gray-200 font-bold text-2xl">Shopping mall</h1>
                            <span className="text-gray-400">you need to buy hear</span>
                        </div>
                        <div className="mt-4 relative text-gray-200 flex items-center">
                            <RiSearch2Line className="absolute ml-2" />
                            <input
                                className="bg-[#1f1d2b] pl-8 py-2 rounded-xl w-full"
                                placeholder="Search"
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </header>
                    <div className="mb-4">
                        <ul className="flex gap-4 text-white border-b py-2 justify-between md:justify-start md:gap-8">
                            <li className="relative">
                                <button
                                    className={`hover:text-[#ec7c6a] before:w-1/2 before:h-[1px] before:left-0 hover:before:bg-[#ec7c6a] before:absolute before:-bottom-[9px] ${!selectedCategory && "text-[#ec7c6a]"}`}
                                    onClick={() => setSelectedCategory("")}
                                >
                                    Mostrar todos
                                </button>
                            </li>
                            <li className="relative">
                                <button
                                    className={`hover:text-[#ec7c6a] before:w-1/2 before:h-[1px] before:left-0 hover:before:bg-[#ec7c6a] before:absolute before:-bottom-[9px] ${selectedCategory === "men's clothing" && "text-[#ec7c6a]"}`}
                                    onClick={() => setSelectedCategory("men's clothing")}
                                >
                                    men's clothing
                                </button>
                            </li>
                            <li className="relative">
                                <button
                                    className={`hover:text-[#ec7c6a] before:w-1/2 before:h-[1px] before:left-0 hover:before:bg-[#ec7c6a] before:absolute before:-bottom-[9px] ${selectedCategory === "jewelery" && "text-[#ec7c6a]"}`}
                                    onClick={() => setSelectedCategory("jewelery")}
                                >
                                    jewelery
                                </button>
                            </li>
                            <li className="relative">
                                <button
                                    className={`hover:text-[#ec7c6a] before:w-1/2 before:h-[1px] before:left-0 hover:before:bg-[#ec7c6a] before:absolute before:-bottom-[9px] ${selectedCategory === "electronics" && "text-[#ec7c6a]"}`}
                                    onClick={() => setSelectedCategory("electronics")}
                                >
                                    electronics
                                </button>
                            </li>
                            <li className="relative">
                                <button
                                    className={`hover:text-[#ec7c6a] before:w-1/2 before:h-[1px] before:left-0 hover:before:bg-[#ec7c6a] before:absolute before:-bottom-[9px] ${selectedCategory === "women's clothing" && "text-[#ec7c6a]"}`}
                                    onClick={() => setSelectedCategory("women's clothing")}
                                >
                                    women's clothing
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 p-8 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredItems.map((data) => (
                            <Card
                                key={data.id}
                                toggleShowDetail={toggleShowDetail}
                                data={data}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

