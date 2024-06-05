import React,{ useState } from 'react'


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handlePhoneChange = (e) => {          
        setPhone(e.target.value);
    };
    const checkPassword = (e) => {
        if (password !== e.target.value) {
            alert("Password and Confirm Password must be the same");
        }
    };
    async function registerUser(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                password: password,
            }),
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 rounded-md shadow-md bg-gray-700">
                <h2 className="text-3xl font-bold mb-4">Login</h2>
                <form onSubmit={registerUser}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                        <input
                            type="name"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                            required
                        />
                    </div>
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
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                        <input
                            type="phone"
                            id="phone"
                            value={phone}
                            onChange={handlePhoneChange}
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
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="password"
                            // value={password}
                            // onChange={checkPassword}
                            className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register