import React, { useState } from 'react';
import { setItem } from '../utils/LocalStorage';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline'; // For v2
// import { truncate } from 'fs';


const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);  // For loader
  const [error, setError] = useState<string | null>(null);  // For error messages
  const [showToast, setShowToast] = useState(false);  // For showing toast message
  const navigate = useNavigate();

  const handleRegister = () => {
    // Clear previous errors
    setError(null);

    // Basic input validation
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    if (username.length < 5) {
      setError("Username should be at least 5 characters.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    // Simulate registration (this should be replaced with actual API calls)
    setLoading(true);
    setTimeout(() => {
      // Store user data and navigate to login
      setItem('user', { username, password });
      setLoading(false);

      // Show success toast and navigate to login after a brief delay
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);  // Hide the toast after 3 seconds
        navigate('/login');
      }, 3000);  // Toast shows for 3 seconds
    }, 2000);  // Simulating a delay (replace with your actual logic)
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
          <h2 className="text-2xl font-bold">Register</h2>
        </div>

        {/* Error Message */}
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
          onClick={handleRegister}
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
            "Register"
          )}
        </button>
      </form>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-56 left-1/2 transform -translate-x-1/2 w-80 bg-green-500 text-white py-2 px-4 text-center rounded-lg shadow-lg">
          <p className="text-center">Registration Successful!</p>
        </div>
      )}
    </div>
  );
};

export default Register;
