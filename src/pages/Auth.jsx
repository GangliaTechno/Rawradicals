import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!isLogin && !formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(isLogin ? 'Logging in...' : 'Signing up...');
      navigate('/'); // ✅ Redirect to homepage
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-gray-100 p-10">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          {isLogin ? 'LOGIN' : 'SIGN UP'}
        </h2>
        <p className="text-center text-gray-600 mt-2">
          {isLogin
            ? 'Enter your email and password to login:'
            : 'Please fill in the information below:'}
        </p>

        <form className="mt-6 space-y-4 bg-gray-100" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="relative">
              <input
                type="text"
                id="firstName"
                placeholder=" "
                value={formData.firstName}
                onChange={handleChange}
                className={`peer w-full border bg-gray-100 px-3 pt-6 pb-2 focus:outline-none ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                } focus:border-gray-600`}
              />
              <label
                htmlFor="firstName"
                className="absolute left-3 top-1 text-gray-500 text-sm transition-all duration-200 transform
                  peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600"
              >
                First Name
              </label>
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
          )}

          {!isLogin && (
            <div className="relative">
              <input
                type="text"
                id="lastName"
                placeholder=" "
                value={formData.lastName}
                onChange={handleChange}
                className="peer w-full border bg-gray-100 border-gray-300 px-3 pt-6 pb-2 focus:outline-none focus:border-gray-600"
              />
              <label
                htmlFor="lastName"
                className="absolute left-3 top-1 text-gray-500 text-sm transition-all duration-200 transform
                  peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600"
              >
                Last Name
              </label>
            </div>
          )}

          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              className={`peer w-full border bg-gray-100 px-3 pt-6 pb-2 focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:border-gray-600`}
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-1 text-gray-500 text-sm transition-all duration-200 transform
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder=" "
              value={formData.password}
              onChange={handleChange}
              className={`peer w-full border bg-gray-100 px-3 pt-6 pb-2 pr-12 focus:outline-none ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:border-gray-600`}
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-1 text-gray-500 text-sm transition-all duration-200 transform
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Password
            </label>
            <span
              className="absolute right-4 top-3.5 cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {isLogin && (
            <div className="text-right text-sm text-gray-500">
              <a href="/forgot-password" className="hover:text-black">
                Forgot your password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="relative w-full py-3 rounded-md text-lg overflow-hidden group border border-black bg-black"
          >
            <span className="absolute inset-0 bg-black transition-all duration-300 ease-in translate-x-0 group-hover:translate-x-full"></span>
            <span className="absolute inset-0 bg-gray-100 transition-all duration-300 -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 text-white group-hover:text-black transition duration-300">
              {isLogin ? 'LOGIN' : 'CREATE ACCOUNT'}
            </span>
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            type="button"
            className="font-semibold hover:text-black ml-1"
            onClick={() => {
              setIsLogin(!isLogin);
              setErrors({});
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
              });
            }}
          >
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}
