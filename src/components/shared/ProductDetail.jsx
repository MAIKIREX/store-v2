import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setShowDetail } from "../../features/showDetail/showDetailSlice";
import { useCallback, useEffect } from "react";

function ProductDetail(props) {
    // Selecciona solo la parte del estado que necesitas
    const showDetail = useSelector(state => state.showDetail);
    const dispatch = useDispatch();

    // Memoriza la función para evitar recrearla en cada renderizado
    const handleCloseDetail = useCallback(() => {
        dispatch(setShowDetail(!showDetail)); // Alterna entre true y false
    }, [dispatch, showDetail]);

    // Usar useEffect para ver el valor actualizado de showDetail
    useEffect(() => {
        console.log("showDetail ha cambiado:", showDetail);
    }, [showDetail]);

    return (
        <>
            <div
                className={`text-white ${showDetail ? "right-0" : "-right-full"} transition-all fixed bg-[#1f1d2b] w-full lg:w-[23%] h-full flex flex-col rounded-tl-xl rounded-bl-xl z-50 p-4 md:p-16 lg:p-4`}
            >
                <header>
                    <button onClick={handleCloseDetail} className="p-3 bg-[#262837] rounded-full mb-4">
                        <RiCloseFill />
                    </button>
                    <h1 className="font-bold text-2xl text-center mb-6">Product Detail</h1>
                </header>
                <main>
                    <figure className="mb-4">
                        <img className="w-full h-full rounded-xl" src="headphone.jpg" alt="" />
                    </figure>
                    <h2 className="font-medium text-xl mb-2">Title</h2>
                    <p className="text-lg mb-2">price: 3.65</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos illo fugiat, a sed veritatis earum culpa aliquid nam dignissimos natus quo, libero dolor obcaecati est provident error minima adipisci!</p>
                </main>
            </div>
        </>
    );
}

export default ProductDetail;
