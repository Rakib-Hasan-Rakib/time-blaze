import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
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
      <div className="form-bg flex flex-col text-white rounded-xl my-12 px-6 py-4 space-y-2 tracking-wider w-2/5 mx-auto">
        <h2 className="text-3xl text-center font-semibold capitalize mb-4">
          sign up
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <label htmlFor="email" className="block mb-2 text-md">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  placeholder="First Name"
                  className="w-full px-3 py-2 rounded-md focus:outline-none text-black bg-gray-200 placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-md">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  placeholder="Last Name"
                  className="w-full px-3 py-2 rounded-md focus:outline-none text-black bg-gray-200 placeholder:text-gray-500"
                />
              </div>
            </div>
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
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                {...register("image", { required: true })}
                accept="image/*"
                className="w-full px-3 py-2 rounded-md focus:outline-none border border-white"
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
              value="Sign Up"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full rounded-md py-3 font-semibold tracking-wider cursor-pointer"
            />
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
          Already have account?
          <Link to="/" className="text-pink-500 hover:underline">
            Sign In
          </Link>
          .
        </p>
      </div>
    </>
  );
};
export default Signup;
