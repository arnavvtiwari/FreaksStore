import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function ClothingPage() {
    return (
        <div className="bg-gray-800 text-white">
            <header className="shadow sticky top-0 bg-gray-800">
                <nav className="bg-gray-800 border-gray-700 divide-x-4 px-4 lg:px-6 py-2.5">
                    {/* Navigation content */}
                </nav>
            </header>
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">Shop Our Women's Collection</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Product cards */}
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
                            <img src={`https://via.placeholder.com/300?text=Product${index + 1}`} alt={`Product${index + 1}`} className="w-full" />
                            <div className="p-4">
                                <NavLink to="/productview" className="text-lg font-semibold mb-2">Product Name</NavLink>
                                <p className="text-gray-300">Product description goes here.</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-lg font-bold">$49.99</span>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="bg-gray-800 py-8">
                {/* Footer content */}
            </footer>
        </div>
    );
}
