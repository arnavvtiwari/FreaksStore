import React, { useState } from 'react';

export default function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Product 1',
            description: 'Description of Product 1',
            image: 'https://picsum.photos/500/500', // Random 500x500 image from Lorem Picsum
            quantity: 2
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description of Product 2',
            image: 'https://picsum.photos/500/500', // Random 500x500 image from Lorem Picsum
            quantity: 1
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description of Product 3',
            image: 'https://picsum.photos/500/500', // Random 500x500 image from Lorem Picsum
            quantity: 3
        }
    ]);

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
            <div className="bg-gray-100 p-4 rounded-lg">
                {cartItems && cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex items-center mb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">{item.description}</p>
                                    <div className="flex items-center mt-2">
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            className="border border-gray-400 rounded-md px-2 py-1 mr-2 w-16 text-center"
                                            onChange={(e) => console.log("Quantity changed")}
                                        />
                                        <button 
                                            className="text-red-500 font-semibold"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Continue</button>
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </div>
    );
}
