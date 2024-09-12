import { useDispatch, useSelector } from "react-redux";
import { RiAddCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { setShowDetail } from "../../features/showDetail/showDetailSlice";
import {setProductToShow} from "../../features/productToshow/productToShow"
import { addTask } from "../../features/cart/cartSlice"; // Verifica que esté correctamente importado

function Card(props) {
    const { data } = props;

    /* redux */
    const cartProducts = useSelector((state) => state.carts); // Si "carts" es el nombre de tu slice
    const dispatch = useDispatch();

    const handleCartProduct = (product) => {
        dispatch(addTask(product)); // Añadir el producto al carrito mediante Redux
    };

    const handleCloseDetail = (data) => {
        dispatch(setShowDetail())
        dispatch(setProductToShow(data))
    }

    const renderIcon = (id) => {
        // Cambiar de 'filter' a 'find' para buscar un producto específico
        const isCart = cartProducts.find((item) => item.id === id);

        if (isCart) {
            return (
                <div className="absolute top-2 right-2 text-3xl p-1 bg-[#437253] rounded-xl text-white">
                    <RiCheckboxCircleLine />
                </div>
            );
        } else {
            return (
                <div
                    onClick={(e) => {
                        e.stopPropagation(); // Detener propagación del evento al contenedor
                        handleCartProduct(data); // Pasar el producto para agregarlo al carrito
                    }}
                    className="absolute top-2 right-2 text-3xl p-1 bg-[#1f1d2b] rounded-xl text-white"
                >
                    <RiAddCircleLine />
                </div>
            );
        }
    };

    return (
        <>
            {/* card */}
            <div
                onClick={() => handleCloseDetail(data)}
                className="bg-[#1f1d2b] flex flex-col relative w-full rounded-xl pb-2 cursor-pointer"
            >
                <figure className="w-full h-72">
                    <img
                        className="w-full h-full object-center rounded-xl"
                        src={data.image}
                        alt={data.title} // Alt para accesibilidad
                    />
                </figure>
                <span className="font-medium pl-4 text-white text-2xl">
                    ${data.price}
                </span>
                <p className="text-white pl-4">{data.title}</p>
                <p className="text-black absolute top-2 left-2 p-1 px-2 rounded-lg bg-gray-600/50">
                    {data.category}
                </p>
                {renderIcon(data.id)}
            </div>
        </>
    );
}

export default Card;
