"use client"

import { SunDim, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Dropdown from "./ui/dropdown";

const Navbar = ({ role, isLoggedIn, userId }: { role: string; isLoggedIn: boolean; userId: number }) => {
    const [isModDropdownOpen, setIsModDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState("system");

    const mods = [
        { title: "System", option: "system" },
        { title: "Light", option: "light" },
        { title: "Dark", option: "dark" },
    ];

    const userIconDropdown = [
        { title: "Profile", link: `/${role}?u=${userId}` },
        { title: "My Bookings", link: `/bookings?u=${userId}` },
        { title: "Logout", option: "logout" }
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const handleToggleModButton = () => setIsModDropdownOpen(!isModDropdownOpen);
    const handleToggleUserButton = () => setIsUserDropdownOpen(!isUserDropdownOpen);

    const handleModSelect = (option: string) => {
        setTheme(option);
        setIsModDropdownOpen(false);
    };

    const handleUserSelect = (option: string) => {
        if (option === "logout") {
            setIsUserDropdownOpen(false);
        }
    };

    const halndleLogout = () => {
        setIsUserDropdownOpen(false);
    }

    // Refs for dropdowns
    const userDropdownRef = useRef<HTMLDivElement>(null);
    const modDropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdowns if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
                setIsUserDropdownOpen(false);
            }
            if (modDropdownRef.current && !modDropdownRef.current.contains(event.target as Node)) {
                setIsModDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="py-3 backdrop-blur-md z-50 shadow-md relative">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text text-3xl font-semibold">
                    MegaFun
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-4 items-center">
                    <Link href="/vans" className="hover:bg-blue-700 hover:text-white py-2 px-4 rounded-md transition ease-in-out duration-300">Our Vans</Link>

                    {isLoggedIn ? (
                        <div className="relative flex gap-4 items-center">
                            <Link href={`/${role}`} className="hover:bg-blue-700 hover:text-white py-2 px-4 rounded-md transition ease-in-out duration-300">Dashboard</Link>
                            <div className="relative">
                                <User
                                    onClick={handleToggleUserButton}
                                    className="ring-1 ring-blue-100 rounded-3xl h-8 w-8 p-1 cursor-pointer"
                                />
                                {isUserDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute right-0 mt-2"
                                        ref={userDropdownRef}
                                    >
                                        <Dropdown details={userIconDropdown} onSelect={handleUserSelect} setIsOpen={setIsUserDropdownOpen} />
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <Link href="/login" className="flex gap-2 hover:bg-blue-700 hover:text-white py-2 px-4 rounded-md  transition ease-in-out duration-300">
                            <User />
                            Login
                        </Link>
                    )}

                    <div className="relative">
                        <SunDim
                            className="ring-1 ring-blue-100 rounded-3xl h-8 w-8 p-1 cursor-pointer"
                            onClick={handleToggleModButton}
                        />
                        {isModDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute right-0 mt-2"
                                ref={modDropdownRef}
                            >
                                <Dropdown details={mods} onSelect={handleModSelect} setIsOpen={setIsModDropdownOpen} />
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    {isMobileMenuOpen ? (
                        <X className="cursor-pointer h-8 w-8" onClick={toggleMobileMenu} />
                    ) : (
                        <Menu className="cursor-pointer h-8 w-8" onClick={toggleMobileMenu} />
                    )}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`overflow-hidden absolute top-full w-full sm:px-16 md:hidden bg-white shadow-md px-4 ${isMobileMenuOpen ? "py-4" : "py-0"}`}
            >
                <Link href="/vans" className="block py-2">Our Vans</Link>

                {isLoggedIn ? (
                    <>
                        <Link href={`/${role}`} className="block py-2">Dashboard</Link>
                        <Link href={`/${role}?u=${userId}`} className="block py-2">Profile</Link>
                        <Link href={`/bookings?u=${userId}`} className="block py-2">My Bookings</Link>
                        <p onClick={halndleLogout} className="block py-2">Logout</p>
                    </>
                ) : (
                    <Link href="/login" className="flex gap-2 py-2">
                        <User />
                        Login
                    </Link>
                )}

                <div className="relative flex justify-end gap-2 py-2">
                    <p>System Defalut</p>
                    |
                    <p>Light</p>
                    |
                    <p>Dark</p>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
