import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
function NotFound() {
    return (
      <div className="lg:pl-28">
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center flex flex-col items-center justify-center">
                <RiErrorWarningLine className="text-9xl text-red-500 mb-4" />
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Oops! Page not found.</p>
                <Link
                    to="/"
                    className="inline-block bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-400"
                >
                    Go Back Home
                </Link>
            </div>
        </div>

      </div>
    );
}

export default NotFound;
