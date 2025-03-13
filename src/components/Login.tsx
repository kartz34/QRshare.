import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SaveIcon as WaveIcon } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/home');
  };

  const handleGuestAccess = () => {
    navigate('/guest');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome Back <WaveIcon className="inline-block" /></h1>
            <p className="text-gray-600">Today is a new day. It's your day. You shape it.</p>
            <p className="text-gray-600">Sign in to start managing your projects.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e23cseu****@bennett.edu.in"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="at least 8 characters"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <a href="#" className="text-blue-600 text-sm hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Sign in
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or</span>
            </div>
          </div>

          <div className="space-y-4">
            <button
              className="w-full py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-50"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" className="w-4 h-4" alt="Microsoft" />
              <span>Sign in with Microsoft</span>
            </button>

            <button
              className="w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Biometric Login
            </button>

            <button
              onClick={handleGuestAccess}
              className="w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Continue as Guest
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't you have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
          </p>

          <p className="text-center text-sm text-gray-500">
            © 2023 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
      
      <div className="hidden lg:block flex-1 bg-yellow-50 p-8">
        <div className="h-full flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            alt="Food Waste Prevention"
            className="max-w-lg rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;