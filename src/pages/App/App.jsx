import { useRoutes, BrowserRouter } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Home from "../Home/Home";
import MyAccount from "../MyAcount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import SignIn from "../SignIn/SignIn";
import NotFound from "../NotFound/NotFound";
import { useState } from "react";
import Tavbar from "../../components/shared/Tavbar";
import Checkout from "../../components/shared/Checkout"

{
    /* Routes */
}
const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/my-account", element: <MyAccount /> },
        { path: "/my-order", element: <MyOrder /> },
        { path: "/my-orders", element: <MyOrders /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/*", element: <NotFound /> },
    ]);
    return routes;
};

const App = () => {
    {
        /* state */
    }
    const [showCheckout, setShowCheckout] = useState(false);
    {
        /* Funtions */
    }
    const toggleShowCheckout = () => {
        setShowCheckout(!showCheckout);
    };

    {
        /* Principal */
    }
    return (
        <>
            <BrowserRouter>
                <div className="w-full min-h-screen bg-[#262837] pb-10">
                    <AppRoutes />
                    <Navbar />
                    <Tavbar toggleShowCheckout={toggleShowCheckout} />
                    <Checkout/>
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
