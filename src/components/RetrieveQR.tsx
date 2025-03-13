import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

function RetrieveQR() {
  const [selectedMeal, setSelectedMeal] = useState('breakfast');
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">LOGO</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">VALID TIMING OF {selectedMeal.toUpperCase()} QR</h2>
              <div className="border-2 border-black rounded-lg p-8 flex flex-col items-center justify-center bg-black">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=example" 
                  alt="QR Code" 
                  className="w-48 h-48"
                />
              </div>
              <p className="text-center font-medium">7:30 AM - 9:30 AM</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-center">GET A QR CODE FOR {selectedMeal.toUpperCase()}</h2>
              <div className="space-y-2">
                <p className="font-medium text-center">NO OF {selectedMeal.toUpperCase()} QR CODE</p>
                <p className="text-lg font-semibold text-center">AVAILABLE: 35</p>
              </div>

              <button
                onClick={handleDetailsClick}
                className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 flex items-center justify-center space-x-2"
              >
                <span>SELECT</span>
              </button>

              {showDetails && (
                <div className="p-4 bg-gray-50 rounded-md">
                  <select
                    value={selectedMeal}
                    onChange={(e) => setSelectedMeal(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="snacks">Snacks</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </div>
              )}

              <button className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 flex items-center justify-center space-x-2">
                <ArrowDown className="w-4 h-4" />
                <span>GENERATE</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
            <span className="text-xl font-bold">LOGO</span>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border border-gray-300"></div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-600">
            © 2024 — 2032 <span className="mx-2">·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span className="mx-2">—</span>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RetrieveQR;