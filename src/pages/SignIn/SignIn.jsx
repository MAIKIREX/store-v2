import { useState } from "react";
import { RiLockPasswordLine, RiUser4Line, RiMailLine, RiArrowRightSLine  } from "react-icons/ri";
function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewUser, setShowNewUser] = useState(false);
    console.log('showNewUser:',showNewUser)
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleCreateUser = () => {
        setShowNewUser(!showNewUser);
    };
    return (
        <div className="lg:pl-28">
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className="hidden lg:flex items-center justify-center min-h-screen">
                    <div className="p-8 text-gray-300">
                        <h1 className="text-7xl font-bold text-center mb-4">
                            Shoping Mall
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit omnis explicabo commodi quia sapiente
                            maiores ab nihil molestias? Corporis culpa veniam
                            ducimus? Omnis, eaque. Possimus quidem doloribus
                            ullam amet numquam.
                        </p>
                    </div>
                </div>
                {/* Form */}
                <div className={`${showNewUser ? "" : "hidden"} flex items-center justify-center min-h-screen px-8`}>
                    <div className="flex flex-col text-gray-300 border p-6 rounded-lg">
                        <div className="mb-4 text-center">
                            <h2 className="text-3xl font-bold">Sign In</h2>
                            <span>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.
                            </span>
                        </div>
                        <form className="space-y-4" action="">
                            <div className="relative flex items-center">
                                <RiMailLine className="absolute ml-2" />
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="w-full pl-8 py-2 rounded bg-gray-700 border border-gray-600 shadow-sm"
                                />
                            </div>
                            <div className="relative flex items-center">
                                <RiLockPasswordLine className="absolute ml-2" />
                                <input
                                    type={`${
                                        showPassword ? "text" : "password"
                                    }`}
                                    placeholder="password"
                                    className="w-full pl-8 py-2 rounded bg-gray-700 border border-gray-600"
                                />
                                <button
                                    type="button"
                                    className="p-2 ml-2 bg-gray-600 rounded hover:bg-gray-700"
                                    onClick={togglePassword}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            <button className="w-full p-2 bg-blue-500 rounded text-white hover:bg-[#9ac4f8] hover:text-black">
                                Sign In
                            </button>
                            <div 
                                onClick={toggleCreateUser}
                                className="w-full p-2 bg-gray-500 rounded text-white hover:bg-gray-900 text-center">
                                Create an Account
                            </div>
                        </form>
                    </div>
                </div>
                {/* Create New User */}
                <div className={`${showNewUser? "hidden": ""} flex items-center justify-center min-h-screen px-8 relative`}>
                    <div
                        onClick={toggleCreateUser} 
                        className="absolute top-10 right-10 py-3 px-8 bg-[#1f1d2b] rounded-xl hover:bg-[#1F2937]">
                        <RiArrowRightSLine className="text-white"/> 
                    </div>
                    <div className="bg-gray-800 text-gray-300 p-8 rounded-lg border shadow-lg w-full max-w-md">
                        <div className="mb-4 text-center">
                            <h2 className="text-3xl font-bold">
                                Create New Account
                            </h2>
                            <p>
                                Fill in the details below to create a new
                                account.
                            </p>
                        </div>
                        <form className="space-y-4">
                            {/* Username */}
                            <div className="relative flex items-center">
                                <RiUser4Line className="absolute ml-2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="w-full pl-8 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative flex items-center">
                                <RiMailLine className="absolute ml-2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full pl-8 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative flex items-center">
                                <RiLockPasswordLine className="absolute ml-2 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full pl-8 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                                />
                                <button
                                    type="button"
                                    className="p-2 ml-2 bg-gray-600 rounded text-white"
                                    onClick={togglePassword}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative flex items-center">
                                <RiLockPasswordLine className="absolute ml-2 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className="w-full pl-8 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                                />
                            </div>

                            {/* Create Account Button */}
                            <button className="w-full p-2 bg-blue-500 rounded text-white hover:bg-[#9ac4f8]">
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
