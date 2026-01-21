/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import { GoPerson, GoSearch } from "react-icons/go"
import { CiHeart } from "react-icons/ci"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinkClass = ({ isActive }) =>
        `relative block transition hover:text-[#B18A45]
         after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
         after:-bottom-2 after:h-[6px] after:w-[100%]
         after:border-b-2 after:border-[#B18A45]
         after:rounded-b-full
         after:opacity-0 after:transition-opacity after:duration-300
         ${isActive ? "text-[#B18A45] after:opacity-100" : ""}`

    const links = [
        ["Home", "/"],
        ["About Us", "/about"],
        ["Shop", "/shop"],
        ["Blog", "/blog"],
        ["Gallery", "/gallery"],
        ["Contact", "/contact"],
        ["Exclusive Membership", "/membership"],
    ]

    return (
        <>
            {/* NAVBAR */}
            <nav className="absolute top-0 left-0 w-full z-50">

                {/* Announcement Bar */}
                <header className="flex items-center justify-center gap-2 w-full h-[43px] md:text-sm text-[10px] bg-white text-center border-b border-gray-300">
                    <span>
                        Refill your tea box easily! And you can refill with only your preferred variants
                    </span>
                    <NavLink to="/shop" className="text-[#B18A45] hover:underline">
                        Shop Now
                    </NavLink>
                </header>

                {/* Main Navbar */}
                <main className="px-4 lg:px-[150px] 4xl:px-[300px] flex items-center justify-between h-[76px] bg-transparent text-white">

                    {/* Logo */}
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="Africa Tea Logo"
                            className="w-[108px] h-[76px]"
                        />
                    </NavLink>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center">
                        {links.map(([label, path]) => (
                            <li key={path} className="mx-4">
                                <NavLink to={path} className={navLinkClass}>
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Right Icons */}
                    <aside className="hidden lg:flex items-center gap-3">
                        <GoPerson size={22} className="hover:text-[#B18A45] cursor-pointer" />
                        <NavLink to="/login" className="text-sm hover:text-[#B18A45]">
                            Login
                        </NavLink>
                        <span>/</span>
                        <NavLink to="/register" className="text-sm hover:text-[#B18A45]">
                            Register
                        </NavLink>
                        <GoSearch size={22} className="ml-3 hover:text-[#B18A45] cursor-pointer" />
                        <CiHeart size={22} className="ml-3 hover:text-[#B18A45] cursor-pointer" />
                    </aside>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden text-white"
                    >
                        <Menu size={28} />
                    </button>
                </main>
            </nav>

            {/* Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* Mobile Slide Menu */}
            <aside
                className={`fixed top-0 right-0 h-full w-[60%] bg-white z-50
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <span className="font-semibold text-lg">Menu</span>
                    <button onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                {/* Mobile User Actions */}
                <div className="px-6 py-4 border-b flex items-center gap-4">
                    <GoPerson size={22} />
                    <NavLink
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="text-sm hover:text-[#B18A45]"
                    >
                        Login
                    </NavLink>
                    <span className="text-gray-400">/</span>
                    <NavLink
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="text-sm hover:text-[#B18A45]"
                    >
                        Register
                    </NavLink>
                </div>

                {/* Mobile Navigation Links */}
                <ul className="flex flex-col p-6 gap-6 text-gray-800">
                    {links.map(([label, path]) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className={navLinkClass}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Bottom Actions */}
                <div className="mt-auto px-6 py-6 border-t flex gap-6">
                    <GoSearch
                        size={22}
                        className="cursor-pointer hover:text-[#B18A45]"
                    />
                    <CiHeart
                        size={22}
                        className="cursor-pointer hover:text-[#B18A45]"
                    />
                </div>
            </aside>
        </>
    )
}

export default Navbar
