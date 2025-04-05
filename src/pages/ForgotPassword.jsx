import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Recover Password
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Enter your email to recover your password:
        </p>

        <form className="mt-6 space-y-6">
          <div className="relative">
            <input
              type="email"
              id="recover-email"
              placeholder=" "
              className="peer w-full border bg-gray-100 border-gray-300 px-3 pt-6 pb-2 focus:outline-none focus:border-gray-600"
            />
            <label
              htmlFor="recover-email"
              className="absolute left-3 top-1 text-gray-500 text-sm transition-all duration-200 transform
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Email
            </label>
          </div>

          <button className="relative w-full py-2 rounded-md text-lg overflow-hidden group border border-black bg-black">
            <span className="absolute inset-0 bg-black transition-all duration-300 ease-in translate-x-0 group-hover:-translate-x-full"></span>
            <span className="absolute inset-0 bg-gray-100 transition-all duration-300 -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 text-white group-hover:text-black transition duration-300">
              Recover
            </span>
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Remember your password?{' '}
          <Link to="/" className="font-medium hover:text-black">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
