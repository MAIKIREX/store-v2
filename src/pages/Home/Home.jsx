import Card from "../../components/shared/Card";
import { useState, useEffect } from "react";
import ProductDetail from "../../components/shared/ProductDetail";
import { RiSearch2Line} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCheckout, setCloseCheckout } from "../../features/checkoutToShow/checkoutToShowSlice";

function Home() {
    {
        /* state */
    }
    const [showDetail, setShowDetail] = useState(false);
    const dispatch = useDispatch();
    /* guardado de la base de datos */
    const [item,setItem] = useState([])
    {
        /* Funtions */
    }
    const toggleShowDetail = () => {
        setShowDetail(!showDetail);
    };
    {/* showCheckoout */}
    useEffect(() => {
        const handleResize = () => {
          const isSmall = window.innerWidth > 768; // Cambia el valor 768 al tamaño que prefieras
          if(isSmall){
            dispatch(setOpenCheckout());
          }else{
            dispatch(setCloseCheckout())
          }
        };
    
        // Llamar la función cuando el componente se monta
        handleResize();
    
        // Escuchar cambios en el tamaño de la ventana
        window.addEventListener('resize', handleResize);
    
        // Limpiar el evento cuando el componente se desmonta
        return () => window.removeEventListener('resize', handleResize);
      }, [dispatch]);

    // Fetching data from API
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchItems();
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez, al montar el componente
    console.log('item',item)
    return (
        <>
            <ProductDetail
                showDetail={showDetail}
                toggleShowDetail={toggleShowDetail}
            />
            {/* main */}
            <div className="grid grid-cols-1 lg:grid-cols-8 lg:pl-28">
                {/* home */}
                <div className="lg:col-span-6 p-4">
                    <header className="flex flex-col mb-4 md:flex-row md:justify-between md:items-center">
                        <div>
                            <h1 className="text-gray-200 font-bold text-2xl">
                                Shopping mall
                            </h1>
                            <span className="text-gray-400">
                                you need to buy hear
                            </span>
                        </div>
                        <div className="mt-4 relative text-gray-200 flex items-center">
                            <RiSearch2Line className="absolute ml-2" />
                            <input
                                className="bg-[#1f1d2b] pl-8 py-2 rounded-xl w-full"
                                placeholder="Search"
                                type="text"
                            />
                        </div>
                    </header>
                    {/* Tabs */}
                    <div className="mb-4">
                        <ul className="flex gap-4 text-white  border-b py-2 justify-between md:justify-start md:gap-8">
                            <li className="relative">
                                <a
                                    className="hover:text-[#ec7c6a] before:w-1/2 before:h-[1px] before:left-0 hover:before:bg-[#ec7c6a] before:absolute before:-bottom-[9px]"
                                    href="#"
                                >
                                    {" "}
                                    Clothes{" "}
                                </a>
                            </li>
                            <li className="relative">
                                <a
                                    className="hover:text-[#ec7c6a] before:w-1/2 before:h-[1px] before:left-0 hover:before:bg-[#ec7c6a] before:absolute before:-bottom-[9px]"
                                    href="#"
                                >
                                    {" "}
                                    Clothes{" "}
                                </a>
                            </li>
                            <li className="relative">
                                <a
                                    className="hover:text-[#ec7c6a] before:w-1/2 before:h-[1px] before:left-0 hover:before:bg-[#ec7c6a] before:absolute before:-bottom-[9px]"
                                    href="#"
                                >
                                    {" "}
                                    Clothes{" "}
                                </a>
                            </li>
                            <li className="relative">
                                <a
                                    className="hover:text-[#ec7c6a] before:w-1/2 before:h-[1px] before:left-0 hover:before:bg-[#ec7c6a] before:absolute before:-bottom-[9px]"
                                    href="#"
                                >
                                    {" "}
                                    Clothes{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Main */}
                    <div className="grid grid-cols-1 p-8 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card */}
                        {item.map(data => <Card key={data.id} toggleShowDetail={toggleShowDetail} data={data}></Card>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
