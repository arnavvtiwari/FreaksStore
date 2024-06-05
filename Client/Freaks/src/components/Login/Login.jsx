import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    async function loginUser(e){
        e.preventDefault()
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });
        const data = await response.json();
        if(data.user){
            alert("Login Successful")
            window.location.href = "/dashboard"
        }
        else{
            alert("Invalid Credentials")
        }
    }

    return (
        <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 rounded-md shadow-md bg-gray-700">
                <h2 className="text-3xl font-bold mb-4">Login</h2>
                <form onSubmit={loginUser}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        Log In
                    </button>
                    <NavLink to="/register" className="block text-center mt-4 text-sm font-semibold hover:underline">Don't have an account? Register here.</NavLink>
                </form>
            </div>
        </div>
    );
}
