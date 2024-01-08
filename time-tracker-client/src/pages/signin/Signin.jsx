import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Signin = () => {
    const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };
  const handleGoogleSignIn = () => {};
  return (
    <>
      <div className="form-bg flex flex-col text-white rounded-xl my-12 px-6 py-4 space-y-2 tracking-wider">
        <h2 className="text-3xl text-center font-semibold capitalize mb-4">
          sign in
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-md">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 rounded-md focus:outline-none text-black bg-gray-200 placeholder:text-gray-500"
                data-temp-mail-org="0"
              />
            </div>
            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-md mb-2">
                  Password
                </label>
              </div>
              <input
                type={`${showPass ? "text" : "password"}`}
                {...register("password", { required: true })}
                placeholder="*******"
                className="w-full px-3 py-2 rounded-md focus:outline-none text-black bg-gray-200 placeholder:text-gray-900"
              />
              <div className="absolute top-3/4 right-4 -translate-y-1/2">
                {showPass ? (
                  <FaEyeSlash
                    size={20}
                    onClick={() => setShowPass(false)}
                    className="text-gray-400"
                  />
                ) : (
                  <FaEye
                    size={20}
                    onClick={() => setShowPass(true)}
                    className="text-gray-600"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="submit"
              value="Sign In"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full rounded-md py-3 font-semibold tracking-wider cursor-pointer"
            />
            {/* <Link
              type="submit"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full rounded-md py-3 font-semibold"
            >
              Continue
            </Link> */}
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <hr className="bg-black w-full" />
          <span>or</span>
          <hr className="w-full" />
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-1 border-gray-300 rounded-md cursor-pointer"
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center">
          Don't have an account yet?
          <Link to="/signup" className="text-pink-500 hover:underline">
            Sign Up
          </Link>
          .
        </p>
      </div>
    </>
  );
};
export default Signin;
