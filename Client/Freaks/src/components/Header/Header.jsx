import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 bg-gray-800">
            <nav className="bg-gray-800 divide-purple-600 divide-x-4 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo-no-background.svg"
                            className="mr-3 h-24"
                            alt="Logo"
                        />
                    </Link>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/products"
                                    activeClassName="text-orange-700"
                                    className="block py-2 pr-4 pl-3 mr-5 duration-200 text-gray-200 border-b border-gray-800 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0"
                                >
                                    Men
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/productsw"
                                    activeClassName="text-orange-700"
                                    className="block py-2 pr-4 pl-3 mr-96 duration-200 text-gray-200 border-b border-gray-800 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0"
                                >
                                    Women
                                </NavLink>
                            </li>
                            <li>
                            <form action="#" method="GET" className="flex">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search..."
                            className="text-gray-800 px-3 py-2 rounded-l-lg focus:outline-none "
                        />
                        <button
                            type="submit"
                            className="bg-purple-600  text-white px-4 py-2 rounded-r-lg  hover:bg-purple-700 focus:ring-4 focus:ring-purple-400  "
                        >
                            <SearchOutlinedIcon/>
                        </button>
                    </form>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-200 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/cart"
                            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <ShoppingCartOutlinedIcon/>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="h-0.5 bg-purple-600"></div>
        </header>
    );
}
