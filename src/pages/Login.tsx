import React, { useState } from 'react';
import { getItem } from '../utils/LocalStorage';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline'; // For v2

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loader state
  const [error, setError] = useState<string | null>(null); // Error state
  const navigate = useNavigate();

  const handleLogin = () => {
    // Clear previous errors
    setError(null);

    // Input validation
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    setLoading(true);

    // Simulating login process
    setTimeout(() => {
      const user = getItem('user');
      if (user && user.username === username && user.password === password) {
        navigate('/products');
      } else {
        setError('Invalid credentials');
      }
      setLoading(false);
    }, 2000);  // Simulating network delay
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white border border-black p-6 rounded-lg shadow-lg w-80">
        <div className="flex justify-between items-center mb-5">
          <button type="button" onClick={handleBack} className="text-gray-600 hover:text-grey-800">
            <ChevronLeftIcon className="h-6 w-6 hover:text-grey-800" aria-hidden="true" />
          </button>
          <h2 className="text-2xl font-bold">Login</h2>
        </div>

        {/* Display error messages */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          className="border border-black p-2 w-full mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-black p-2 w-full mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          onClick={handleLogin}
          className={`bg-blue-500 text-white p-2 w-full rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? (
            <span className="flex justify-center items-center">
              <svg
                className="w-6 h-6 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 0116 0 8 8 0 01-16 0z"
                ></path>
              </svg>
            </span>
          ) : (
            "Log In"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
