import React from 'react';
import Logo from '../assets/images/Dark.png';

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen dark:bg-gray-800">
      <div className="flex flex-col items-center justify-around w-1/4 h-3/5 dark:bg-gray-900 rounded-3xl text-white min-w-[350px]">
        <div className="flex flex-col justify-center items-center">
        <img src={Logo} className="w-24 h-24" />
        <h1 className="text-4xl font-semibold text-white">LabNotes</h1>
        </div>
        <form>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-[250px] appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </form>
        <button
          className="w-[250px] h-10 bg-[#00C2CB] font-semibold text-lg rounded-xl"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
