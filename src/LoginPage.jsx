import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen py-6 overflow-hidden bg-gray-900 sm:py-12 font-poppins">
      <div className="absolute -translate-y-1/2 rounded-full top-1/2 left-1/2 h-96 w-96 -translate-x-1/3 bg-gradient-to-br from-indigo-600/50 to-purple-800/30 blur-3xl animate-float"></div>
      <div className="absolute right-0 rounded-full top-1/4 h-80 w-80 -translate-x-1/4 translate-y-1/4 bg-gradient-to-br from-purple-600/50 to-pink-800/30 blur-3xl animate-float-delay-1"></div>
      <div className="absolute bottom-0 rounded-full left-1/4 h-72 w-72 translate-x-1/4 translate-y-1/4 bg-gradient-to-br from-pink-600/50 to-red-800/30 blur-3xl animate-float-delay-2"></div>

      <div className="relative w-full max-w-md px-6 pt-10 pb-8 mx-auto shadow-xl bg-slate-800/50 backdrop-blur-md ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white">Sign In</h1>
            <p className="mt-2 text-gray-400">Sign in below to access your account</p>
          </div>
          <div className="mt-8">
            <form action="">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                <input className="block w-full px-4 py-2 text-white transition border rounded-md shadow-sm bg-slate-700/50 border-slate-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="password">Password</label>
                <input className="block w-full px-4 py-2 text-white transition border rounded-md shadow-sm bg-slate-700/50 border-slate-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" id="password" type="password" placeholder="Enter your password" required />
              </div>
              <div className="mt-8">
                <button type="submit" className="w-full px-4 py-2.5 tracking-wide text-white font-semibold bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300">
                  Sign In
                </button>
              </div>
              <div className="mt-6 text-sm text-center">
                <span className="text-gray-400">New here? </span>
                <Link to="/register" className="font-semibold text-indigo-400 hover:underline">Create an account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;