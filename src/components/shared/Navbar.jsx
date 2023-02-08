import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

// import "./Navbar.css"

function NavBar() {
    const [active, setActive] = useState(false);
    const navToggle = () => {
        setActive((prevState) => {
            console.log(prevState);
            return !prevState;
        });
    };
    return (
        <div className=" relative">
            {/* Navbar */}
            <nav className=" w-full h-[8vh] bg-priCol flex items-center px-10 md:px-20">
                <div className="Nav w-full  flex justify-between">
                    {/* Menu toggle */}
                    <div
                        onClick={navToggle}
                        className="Nav__menu text-2xl text-white hover:cursor-pointer"
                    >
                        {active ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>

                    <div className="Nav__logout text-2xl text-white ">
                        <FiLogOut />
                    </div>
                </div>
            </nav>
            <div
                className={` ${
                    active ? "block" : "hidden"
                } w-full h-[92vh] bg-black opacity-40 absolute`}
                onClick={() => setActive(false)}
            ></div>
            <div
                className={`Nav__sidemenu h-[92vh] w-[40vw] md:w-[30vw] absolute bg-secCol md:-left-[30vw] -left-[40vw] ease-out duration-300 p-10 ${
                    active
                        ? "translate-x-[40vw] md:translate-x-[30vw] active"
                        : "translate-x-0"
                } `}
            >
                <ul className="space-y-6">
                    <li className="group cursor-pointer space-y-3">
                        <h3>Make an Appointment</h3>{" "}
                        <div className="group-hover:w-full w-0 duration-100 ease-in h-[3px] bg-priCol" />
                    </li>
                    <li className="group cursor-pointer space-y-3">
                        <h3>Get prescription</h3>{" "}
                        <div className="group-hover:w-full w-0 duration-100 ease-in h-[3px] bg-priCol" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
