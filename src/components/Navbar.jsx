import React, { useState, useEffect } from "react";
import { HashLink as NavLink } from 'react-router-hash-link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Container from "./Container";
import dunoLogo from "../assets/dunoFianlLogo.png"
import { useParams } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
    const { id } = useParams();
    console.log(id)
    const [nav, setNav] = useState(false);
    const handleClick1 = () => {
        setNav(!nav);
    };    

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
                setNav(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <nav className="z-50 fixed w-full py-14  md:px-0 bg-secondary  top-0 left-0">
            <Container>
                <div className="flex justify-between items-center w-full h-full">
                    <div className="flex items-center justify-between w-full h-full">
                        <div>
                            <img src={dunoLogo} className=" w-28" alt="" />
                            {/* <h1 className="text-4xl font-bold sm:text-3xl text-primary-main">DUNO</h1> */}
                        </div>
                        <div className="">
                            <ul className="hidden space-x-10 md:flex text-xl">
                                <li className="navBarItem tracking-widest active">
                                    <ScrollLink smooth={true} duration={500} spy={true} offset={-64} activeClass="active" to="home" className="block cursor-pointer" >Home</ScrollLink>
                                </li>
                                <li className="navBarItem tracking-widest">
                                    <ScrollLink smooth={true} duration={500} spy={true} offset={-64} activeClass="active" to="service" className="block cursor-pointer" >Service</ScrollLink>
                                </li>
                                <li className="navBarItem tracking-widest">
                                    <ScrollLink smooth={true} duration={500} spy={true} offset={-64} activeClass="active" to="contact" className="block cursor-pointer" >Contact</ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:hidden" onClick={handleClick1}>
                        {!nav ? <Bars3Icon className="text-primary-main w-10"></Bars3Icon> : <XMarkIcon className="w-10 navBarTextColor"></XMarkIcon>}
                    </div>
                </div>
                <div className="">
                    <ul className={!nav ? 'hidden' : 'md:flex w-[45%] pl-7 py-7 absolute right-0 top-0 flex-col shadow-2xl backgroundColor text-lg'}>
                        {nav && (
                            <li className="w-full mb-4" onClick={handleClick1}>
                                <XMarkIcon className=" w-9 inline-block mr-2 text-primary-main" />
                            </li>
                        )}
                        <li className="w-full text-2xl mb-4 active navBarItem">
                            <ScrollLink smooth={true} duration={500} spy={true} offset={-64} activeClass="active" to="home" className="block cursor-pointer" >Home</ScrollLink>
                        </li>
                        <li className="w-full text-2xl mb-4 navBarItem">
                            <ScrollLink smooth={true} duration={500} spy={true} offset={-64} activeClass="active" to="service" className="block cursor-pointer" >Service</ScrollLink>
                        </li>
                        <li className="w-full text-2xl navBarItem">
                            <ScrollLink smooth={true} duration={500} spy={true} offset={-64} activeClass="active" to="contact" className="block cursor-pointer" >Contact Us</ScrollLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
};

export default Navbar;