import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProductPage() {
    const images = [
        'https://via.placeholder.com/500',
        'https://via.placeholder.com/500',
        'https://via.placeholder.com/500',
        'https://via.placeholder.com/500',
        // Add more image URLs as needed
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="bg-gray-800 text-white">
            <header className="shadow sticky top-0 bg-gray-800">
                <nav className="bg-gray-800 border-gray-700 divide-x-4 px-4 lg:px-6 py-2.5">
                    {/* Navigation content */}
                </nav>
            </header>
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="col-span-2 md:col-span-1">
                        {/* Product images and zooming functionality */}
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <img key={index} src={image} alt={`Product Image ${index + 1}`} className="w-full rounded-lg shadow-lg" />
                            ))}
                        </Slider>                    
                        </div>
                    <div className="col-span-2 md:col-span-2">
                        {/* Product details */}
                        <h1 className="text-3xl font-bold mb-4">Product Name</h1>
                        <p className="text-lg text-gray-300 mb-6">Product description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lorem eros. Vestibulum non pretium nulla.</p>
                        <div className="mb-6">
                            {/* Price and Add to Cart button */}
                            <span className="text-lg font-bold mr-4">$49.99</span>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                        <div className="mb-6">
                            {/* Product options such as size, color, etc. */}
                            <label className="block mb-2 text-lg font-semibold">Select Size:</label>
                            <select className="bg-gray-700 text-white rounded-md py-2 px-4 w-full">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            {/* Product rating and reviews */}
                            <div className="flex items-center">
                                <span className="text-lg font-semibold mr-2">Rating:</span>
                                <div className="flex">
                                    <span className="text-yellow-400">&#9733;</span>
                                    <span className="text-yellow-400">&#9733;</span>
                                    <span className="text-yellow-400">&#9733;</span>
                                    <span className="text-yellow-400">&#9733;</span>
                                    <span className="text-gray-500">&#9733;</span>
                                </div>
                            </div>
                            <p className="text-lg text-gray-300 mt-2">4.0 out of 5 stars (Based on 123 reviews)</p>
                        </div>
                        <div className="mb-6">
                            {/* Random product details */}
                            <ul className="text-gray-300">
                                <li className="mb-2">Material: Cotton</li>
                                <li className="mb-2">Color: Blue</li>
                                <li className="mb-2">Brand: XYZ</li>
                                <li className="mb-2">SKU: ABC123</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Similar product cards */}
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
                                <img src={`https://via.placeholder.com/300?text=SimilarProduct${index + 1}`} alt={`SimilarProduct${index + 1}`} className="w-full" />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold mb-2">Similar Product Name</h2>
                                    <p className="text-gray-300">Product description goes here.</p>
                                    <Link to="/" className="block mt-4 text-purple-600 font-semibold hover:underline">View Product</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <footer className="bg-gray-800 py-8">
                {/* Footer content */}
            </footer>
        </div>
    );
}
