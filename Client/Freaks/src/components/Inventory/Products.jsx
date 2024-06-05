import React from 'react';
import { NavLink } from 'react-router-dom';
import { mens_kurta } from '/Users/arnavtiwari/Desktop/development/Freaks Store/Client/Freaks/src/assets/mens.js';

export default function ClothingPage() {
    return (
        <div className="bg-gray-800 text-white">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">Shop Our Men's Collection</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Product cards */}
                    {mens_kurta.map((product, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
                            <img src={product.imageUrl} alt={product.title} className="w-full h-96" />
                            <div className="p-4">
                                <NavLink to={`/productview/${index}`} className="text-lg font-semibold mb-2">{product.title}</NavLink>
                                <p className="text-gray-300">{product.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-lg ">{product.discountedPrice}</span>
                                    <span className="text-lg text-neutral-500 line-through">{product.price}</span>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
