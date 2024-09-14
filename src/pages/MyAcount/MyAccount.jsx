import { useState } from "react";
import { RiUser3Line, RiMailLine, RiLockPasswordLine } from "react-icons/ri";

function MyAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="lg:pl-28 grid lg:grid-cols-2 grid-cols-1">
      <div className="min-h-screen hidden lg:flex flex-col justify-center items-center  text-gray-200">
        <div className="bg-[#1f1d2b] p-4 rounded-xl">
          <header className="mb-4">
            <h1 className="text-3xl font-bold text-gray-200">My Account</h1>
          </header>
          <div className="text-start">
            <h2 className="text-xl">Personal Information</h2>
            <p className="text-xl">Name: <span>Antonio Villegas</span></p>
            <p className="text-xl">Email: <span>fadsfasd@dfasf.com</span> </p>
          </div>
        </div>
      </div>
      {/* Update form */}
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-4xl bg-[#1f1d2b] rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-300 lg:mb-6 mb-2">My Account</h2>
          <div className="text-start text-gray-400 mb-2 lg:hidden">
            <p className="text-xl">Name: <span>Antonio Villegas</span></p>
            <p className="text-xl">Email: <span>fadsfasd@dfasf.com</span> </p>
          </div>
          {/* Personal Information Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-400 mb-4">Personal Information</h3>
            <form className="space-y-4">
              <div className="relative flex items-center">
                <RiUser3Line className="absolute ml-2 text-black" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-8 py-2 rounded bg-gray-200 border border-gray-300"
                />
              </div>
              <div className="relative flex items-center">
                <RiMailLine className="absolute ml-2 text-black" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-8 py-2 rounded bg-gray-200 border border-gray-300"
                />
              </div>
              <button className="w-full py-2 bg-blue-500 rounded text-white hover:bg-blue-400">
                Update Information
              </button>
            </form>
          </div>

          {/* Change Password Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-400 mb-4">Change Password</h3>
            <form className="space-y-4">
              <div className="relative flex items-center">
                <RiLockPasswordLine className="absolute ml-2 text-black" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Current Password"
                  className="w-full pl-8 py-2 rounded bg-gray-200 border border-gray-300"
                />
              </div>
              <div className="relative flex items-center">
                <RiLockPasswordLine className="absolute ml-2 text-black" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  className="w-full pl-8 py-2 rounded bg-gray-200 border border-gray-300"
                />
              </div>
              <div className="relative flex items-center">
                <RiLockPasswordLine className="absolute ml-2 text-black" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                  className="w-full pl-8 py-2 rounded bg-gray-200 border border-gray-300"
                />
                <button
                  type="button"
                  className="absolute right-2 p-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={togglePassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <button className="w-full py-2 bg-green-500 rounded text-white hover:bg-green-400">
                Update Password
              </button>
            </form>
          </div>
          {/* Delete account */}
          <div className="fix fix-col mt-2 justify-center items-center">
            <h2 className="text-gray-400 text-start text-2xl">Delete Accouint</h2>
            <button className="bg-red-500 w-full py-2 text-gray-200 text-lg font-medium rounded-lg my-2 hover:bg-red-400">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
